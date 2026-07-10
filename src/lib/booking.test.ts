import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buildBookingBroomBody,
  getBookingBroomConfig,
  validateBookingRequest,
} from "./booking";

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

describe("validateBookingRequest", () => {
  it("accepts a complete demo booking payload", () => {
    const result = validateBookingRequest(DEMO_BOOKING);
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.payload.customer_name, "Demo Tester");
    assert.equal(result.payload.email, "demo.tester@example.com");
    assert.equal(result.payload.preferred_date, "2026-07-20");
  });

  it("rejects missing customer_name", () => {
    const result = validateBookingRequest({ ...DEMO_BOOKING, customer_name: "   " });
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.error.status, 400);
    assert.match(result.error.error, /customer_name/i);
  });

  it("trims whitespace from fields", () => {
    const result = validateBookingRequest({
      ...DEMO_BOOKING,
      customer_name: "  Demo Tester  ",
      email: "  demo.tester@example.com  ",
    });
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.payload.customer_name, "Demo Tester");
    assert.equal(result.payload.email, "demo.tester@example.com");
  });
});

describe("buildBookingBroomBody", () => {
  it("includes site slug, api key, and demo fields", () => {
    const validated = validateBookingRequest(DEMO_BOOKING);
    assert.equal(validated.ok, true);
    if (!validated.ok) return;

    const body = buildBookingBroomBody(validated.payload, "bb_deltona_dev_key");
    assert.deepEqual(body, {
      site_slug: "deltona",
      api_key: "bb_deltona_dev_key",
      customer_name: "Demo Tester",
      email: "demo.tester@example.com",
      phone: "(689) 555-0199",
      address: "123 Demo Test St, Deltona, FL 32725",
      service_type: "Residential — Standard (2 Bedroom)",
      preferred_date: "2026-07-20",
      preferred_time: "10:00",
      notes: DEMO_BOOKING.notes,
    });
  });
});

describe("getBookingBroomConfig", () => {
  it("returns 503 when env vars are missing", () => {
    const result = getBookingBroomConfig({});
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.error.status, 503);
  });

  it("returns trimmed url and api key when configured", () => {
    const result = getBookingBroomConfig({
      BOOKING_BROOM_URL: "https://broom.example.com/",
      BOOKING_BROOM_API_KEY: " bb_deltona_dev_key ",
    });
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.url, "https://broom.example.com");
    assert.equal(result.apiKey, "bb_deltona_dev_key");
  });
});
