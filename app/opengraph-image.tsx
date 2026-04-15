import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080907",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              fontFamily: "serif",
              fontSize: 22,
              color: "#eceae2",
              letterSpacing: "0.02em",
            }}
          >
            Nodera
            <span style={{ color: "#b8c9a0" }}>.</span>
            Labs
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 12,
              color: "#b8c9a0",
              border: "0.5px solid #b8c9a0",
              borderRadius: 999,
              padding: "3px 10px",
              letterSpacing: "0.08em",
            }}
          >
            Stealth · 2025
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              color: "#eceae2",
              fontSize: 64,
              lineHeight: 1.0,
              fontFamily: "serif",
              maxWidth: 820,
            }}
          >
            IA Industrial para América del Sur
          </div>
          <div
            style={{
              color: "#9e9b90",
              fontSize: 18,
              fontFamily: "monospace",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Productos con IA para sectores productivos del continente
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            gap: 32,
            color: "#7a6e55",
            fontSize: 13,
            fontFamily: "monospace",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {[
            "Agropecuario",
            "Energía",
            "Minería",
            "Forestal",
            "Infraestructura",
            "Pesca",
            "+ 6 sectores",
          ].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
