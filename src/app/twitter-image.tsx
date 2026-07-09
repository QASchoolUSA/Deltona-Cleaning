import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Deltona Cleaning — professional house cleaning in Deltona, FL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 55%, #22c55e 100%)",
          color: "#ffffff",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          Deltona Cleaning
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Professional House Cleaning in Deltona, FL
          </div>
          <div style={{ display: "flex", fontSize: 28, opacity: 0.92, maxWidth: 820 }}>
            Licensed & insured · Instant online quote · Pay after your clean
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, opacity: 0.85 }}>
          deltonacleaning.com · (689) 388-2588
        </div>
      </div>
    ),
    { ...size }
  );
}
