import assert from "node:assert/strict";
import http from "node:http";
import { after, before, describe, it } from "node:test";
import { POST } from "@/app/api/book/route";

type CapturedBooking = {
  site_slug?: string;
  api_key?: string;
  customer_name?: string;
  email?: string;
  phone?: string;
  address?: string;
  service_type?: string;
  preferred_date?: string;
  preferred_time?: string;
  notes?: string;
};

const DEMO_BOOKING = {
  customer_name: "Demo Tester",
  email: "demo.tester@example.com",
  phone: "(689) 555-0199",
  address: "123 Demo Test St, Deltona, FL 32725",
  service_type: "Residential — Standard (2 Bedroom)",
  preferred_date: "2026-07-20",
  preferred_time: "10:00",
  notes:
    "DEMO/TEST booking — please ignore\nSize: 2 Bedroom\nLevel: Standard\nAdd-ons: Inside fridge\nEstimated price: $165\nPayment: Due after cleaning is complete",
};

describe("/api/book route with mock Booking Broom", () => {
  let server: http.Server;
  let broomUrl = "";
  let lastBooking: CapturedBooking | null = null;
  let previousUrl: string | undefined;
  let previousKey: string | undefined;

  before(async () => {
    previousUrl = process.env.BOOKING_BROOM_URL;
    previousKey = process.env.BOOKING_BROOM_API_KEY;

    server = http.createServer(async (req, res) => {
      if (req.method === "POST" && req.url === "/api/bookings") {
        const chunks: Buffer[] = [];
        for await (const chunk of req) {
          chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        }
        lastBooking = JSON.parse(Buffer.concat(chunks).toString("utf8")) as CapturedBooking;

        if (!lastBooking.site_slug || !lastBooking.api_key || !lastBooking.customer_name) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error: "site_slug, api_key, and customer_name are required",
            })
          );
          return;
        }

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ id: "demo-booking-id", message: "Booking created" }));
        return;
      }

      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Not found" }));
    });

    await new Promise<void>((resolve) => {
      server.listen(0, "127.0.0.1", () => resolve());
    });

    const address = server.address();
    assert.ok(address && typeof address === "object");
    broomUrl = `http://127.0.0.1:${address.port}`;
    process.env.BOOKING_BROOM_URL = broomUrl;
    process.env.BOOKING_BROOM_API_KEY = "bb_deltona_dev_key";
  });

  after(async () => {
    if (previousUrl === undefined) delete process.env.BOOKING_BROOM_URL;
    else process.env.BOOKING_BROOM_URL = previousUrl;

    if (previousKey === undefined) delete process.env.BOOKING_BROOM_API_KEY;
    else process.env.BOOKING_BROOM_API_KEY = previousKey;

    await new Promise<void>((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()));
    });
  });

  it("forwards a demo booking to Booking Broom and returns 201", async () => {
    lastBooking = null;

    const request = new Request("http://localhost/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(DEMO_BOOKING),
    });

    const response = await POST(request);
    const data = await response.json();

    assert.equal(response.status, 201);
    assert.equal(data.message, "Booking created");
    assert.equal(data.id, "demo-booking-id");
    assert.deepEqual(lastBooking, {
      site_slug: "deltona",
      api_key: "bb_deltona_dev_key",
      ...DEMO_BOOKING,
    });
  });

  it("rejects an empty booking payload before calling Booking Broom", async () => {
    lastBooking = null;

    const request = new Request("http://localhost/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    const response = await POST(request);
    const data = await response.json();

    assert.equal(response.status, 400);
    assert.match(data.error, /customer_name/i);
    assert.equal(lastBooking, null);
  });

  it("returns 503 when Booking Broom is not configured", async () => {
    const savedUrl = process.env.BOOKING_BROOM_URL;
    delete process.env.BOOKING_BROOM_URL;

    try {
      const request = new Request("http://localhost/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(DEMO_BOOKING),
      });

      const response = await POST(request);
      const data = await response.json();

      assert.equal(response.status, 503);
      assert.match(data.error, /not configured/i);
    } finally {
      process.env.BOOKING_BROOM_URL = savedUrl;
    }
  });
});
