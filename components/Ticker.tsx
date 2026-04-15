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

export default function Ticker() {
  // Duplicate for seamless loop
  const items = [...SECTORS, ...SECTORS];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        background: "var(--surface)",
        padding: "14px 0",
      }}
    >
      <div className="ticker-track">
        {items.map((sector, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              paddingRight: 14,
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.6rem",
              color: "var(--warm-mid)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {sector}
            <span
              style={{
                color: "var(--earth)",
                fontSize: "0.5rem",
              }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
