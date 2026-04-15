const SECTORS = [
  "Agropecuario",
  "Energía",
  "Equipamiento",
  "Forestal",
  "Infraestructura hidráulica",
  "Infraestructura portuaria",
  "Infraestructura de transporte",
  "Inmobiliario",
  "Instalaciones fabriles",
  "Minería",
  "Pesca y acuicultura",
  "Saneamiento ambiental",
];

/* Diagonal lines, concentric circles, rotated rects — all at opacity 0.05 */
function BackgroundSVG() {
  const steps = [-800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200];

  return (
    <svg
      viewBox="0 0 1100 520"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.05,
        pointerEvents: "none",
      }}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Diagonal lines: top-left → bottom-right */}
      {steps.map((x0, i) => (
        <line
          key={`a${i}`}
          x1={x0}
          y1={0}
          x2={x0 + 1100}
          y2={520}
          stroke="#b8c9a0"
          strokeWidth="0.5"
        />
      ))}
      {/* Diagonal lines: top-right → bottom-left */}
      {steps.map((x0, i) => (
        <line
          key={`b${i}`}
          x1={x0 + 1100}
          y1={0}
          x2={x0}
          y2={520}
          stroke="#b8c9a0"
          strokeWidth="0.5"
        />
      ))}

      {/* 3 concentric circles centered at 860,240 */}
      {[200, 130, 60].map((r) => (
        <circle
          key={r}
          cx={860}
          cy={240}
          r={r}
          fill="none"
          stroke="#b8c9a0"
          strokeWidth="0.5"
        />
      ))}

      {/* Rotated rectangle 18° */}
      <rect
        x={100}
        y={90}
        width={900}
        height={340}
        fill="none"
        stroke="#b8c9a0"
        strokeWidth="0.5"
        transform="rotate(18, 550, 260)"
      />

      {/* Rotated rectangle 45° */}
      <rect
        x={325}
        y={150}
        width={450}
        height={220}
        fill="none"
        stroke="#b8c9a0"
        strokeWidth="0.5"
        transform="rotate(45, 550, 260)"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="productos"
      style={{
        position: "relative",
        background: "var(--black)",
        minHeight: "calc(100vh - 52px)",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <BackgroundSVG />

      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          padding: "72px 44px",
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          gap: "3rem",
          alignItems: "end",
        }}
      >
        {/* ── Left column ── */}
        <div>
          {/* Eyebrow */}
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.6rem",
              color: "var(--accent)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 20,
                height: 0.5,
                background: "var(--accent)",
                flexShrink: 0,
              }}
            />
            IA industrial · Sudamérica
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: "clamp(48px, 6.5vw, 82px)",
              lineHeight: 0.93,
              fontWeight: 400,
              marginBottom: "2.5rem",
            }}
          >
            <span
              style={{ display: "block", color: "var(--off-white)" }}
            >
              Inteligencia
            </span>
            <span
              style={{ display: "block", color: "var(--off-white)" }}
            >
              para la
            </span>
            <em
              style={{
                display: "block",
                fontStyle: "italic",
                color: "var(--accent2)",
              }}
            >
              industria
            </em>
            <span
              style={{
                display: "block",
                WebkitTextStroke: "0.5px var(--off-white)",
                color: "transparent",
              }}
            >
              real.
            </span>
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.65rem",
              color: "var(--warm-mid)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1.8,
              maxWidth: 480,
            }}
          >
            Productos con IA para los sectores que mueven la economía de
            América del Sur.
          </p>
        </div>

        {/* ── Right column ── */}
        <div
          style={{
            paddingLeft: "2rem",
            borderLeft: "0.5px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.6rem",
              color: "var(--earth)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Sectores productivos →
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.625rem 1.5rem",
            }}
          >
            {SECTORS.map((sector) => (
              <div key={sector} className="hero-sector-item">
                <span className="sector-dot" />
                <span className="sector-name">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
