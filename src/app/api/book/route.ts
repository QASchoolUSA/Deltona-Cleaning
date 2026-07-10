import { NextResponse } from "next/server";
import {
  buildBookingBroomBody,
  getBookingBroomConfig,
  validateBookingRequest,
} from "@/lib/booking";

export async function POST(request: Request) {
  let form: unknown;

  try {
    form = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!form || typeof form !== "object") {
    return NextResponse.json({ error: "Invalid booking payload" }, { status: 400 });
  }

  const validated = validateBookingRequest(form);
  if (!validated.ok) {
    return NextResponse.json(
      { error: validated.error.error },
      { status: validated.error.status }
    );
  }

  const config = getBookingBroomConfig();
  if (!config.ok) {
    return NextResponse.json({ error: config.error.error }, { status: config.error.status });
  }

  let res: Response;
  try {
    res = await fetch(`${config.url}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildBookingBroomBody(validated.payload, config.apiKey)),
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach booking service. Please try again or call us." },
      { status: 502 }
    );
  }

  let data: { error?: string; id?: string; message?: string } = {};
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (!res.ok) {
    return NextResponse.json({ error: data.error ?? "Booking failed" }, { status: res.status });
  }

  return NextResponse.json(data, { status: 201 });
}
