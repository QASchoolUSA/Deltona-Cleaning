export type BookingRequest = {
  customer_name?: unknown;
  email?: unknown;
  phone?: unknown;
  address?: unknown;
  service_type?: unknown;
  preferred_date?: unknown;
  preferred_time?: unknown;
  notes?: unknown;
};

export type BookingPayload = {
  customer_name: string;
  email?: string;
  phone?: string;
  address?: string;
  service_type?: string;
  preferred_date?: string;
  preferred_time?: string;
  notes?: string;
};

export type BookingValidationError = {
  error: string;
  status: number;
};

function asOptionalString(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function validateBookingRequest(
  form: BookingRequest
): { ok: true; payload: BookingPayload } | { ok: false; error: BookingValidationError } {
  const customer_name = asOptionalString(form.customer_name);
  if (!customer_name) {
    return {
      ok: false,
      error: {
        error: "customer_name is required",
        status: 400,
      },
    };
  }

  return {
    ok: true,
    payload: {
      customer_name,
      email: asOptionalString(form.email),
      phone: asOptionalString(form.phone),
      address: asOptionalString(form.address),
      service_type: asOptionalString(form.service_type),
      preferred_date: asOptionalString(form.preferred_date),
      preferred_time: asOptionalString(form.preferred_time),
      notes: asOptionalString(form.notes),
    },
  };
}

export function buildBookingBroomBody(
  payload: BookingPayload,
  apiKey: string,
  siteSlug = "deltona"
) {
  return {
    site_slug: siteSlug,
    api_key: apiKey,
    customer_name: payload.customer_name,
    email: payload.email,
    phone: payload.phone,
    address: payload.address,
    service_type: payload.service_type,
    preferred_date: payload.preferred_date,
    preferred_time: payload.preferred_time,
    notes: payload.notes,
  };
}

export function getBookingBroomConfig(env: NodeJS.ProcessEnv = process.env) {
  const url = env.BOOKING_BROOM_URL?.trim();
  const apiKey = env.BOOKING_BROOM_API_KEY?.trim();

  if (!url || !apiKey) {
    return {
      ok: false as const,
      error: {
        error: "Booking service is not configured",
        status: 503,
      },
    };
  }

  return {
    ok: true as const,
    url: url.replace(/\/$/, ""),
    apiKey,
  };
}
