/**
 * Optional live smoke test against production.
 * Run with: BOOKING_SMOKE_URL=https://deltonacleaning.com npm run test:booking:smoke
 *
 * Skips automatically when BOOKING_SMOKE_URL is unset so local/CI unit tests stay offline-safe.
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";

const smokeUrl = process.env.BOOKING_SMOKE_URL?.replace(/\/$/, "");

const DEMO_BOOKING = {
  customer_name: "Demo Tester Smoke",
  email: "demo.smoke@example.com",
  phone: "6895550197",
  address: "789 Demo Smoke Ln, Deltona, FL 32725",
  service_type: "Residential — Standard (2 Bedroom)",
  preferred_date: "2026-07-22",
  preferred_time: "11:00",
  notes: "DEMO/TEST smoke booking — please ignore",
};

describe("live booking smoke", { skip: !smokeUrl }, () => {
  it("creates a demo booking via /api/book", async () => {
    assert.ok(smokeUrl);

    const response = await fetch(`${smokeUrl}/api/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(DEMO_BOOKING),
    });

    const data = (await response.json()) as { id?: string; message?: string; error?: string };

    assert.equal(response.status, 201, data.error ?? JSON.stringify(data));
    assert.ok(data.id, "expected booking id");
    assert.equal(data.message, "Booking created");
  });
});
