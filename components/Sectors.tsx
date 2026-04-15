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

export default function Sectors() {
  return (
    <section
      id="sectores"
      style={{
        background: "var(--black)",
        paddingBottom: "80px",
        paddingLeft: "44px",
        paddingRight: "44px",
        borderTop: "0.5px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Section label */}
        <div className="section-label" style={{ paddingTop: "48px" }}>
          03 — Sectores
        </div>

        {/* Cards grid — 1px gap trick */}
        <div
          className="sectors-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {SECTORS.map((sector, i) => (
            <div key={sector} className="sector-card">
              {/* Icon + index */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    color: "var(--accent)",
                    opacity: 0.7,
                    lineHeight: 1,
                  }}
                >
                  ⬡
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: "11px",
                    color: "var(--earth)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Name */}
              <span
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "15px",
                  color: "var(--off-white)",
                  lineHeight: 1.4,
                  letterSpacing: "0.1em",
                }}
              >
                {sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
