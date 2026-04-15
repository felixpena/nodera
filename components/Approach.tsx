const CARDS = [
  {
    index: "01",
    titleParts: ["Build, ", "no", " anunciar."],
    italicIndex: 1,
    body: "Construimos software escalable, no proyectos únicos. Cada producto que sale de Nodera existe para repetirse, no para describirse.",
  },
  {
    index: "02",
    titleParts: ["Dominio ", "sectorial", "."],
    italicIndex: 1,
    body: "Cada producto nace de entender profundamente el sector. Estudiamos los procesos, las métricas y los incentivos antes de escribir código.",
  },
  {
    index: "03",
    titleParts: ["Frontera ", "tecnológica", "."],
    italicIndex: 1,
    body: "Usamos lo mejor de la IA aplicado a problemas industriales reales. Modelos de lenguaje, visión computacional, razonamiento automatizado.",
  },
];

export default function Approach() {
  return (
    <section
      id="enfoque"
      style={{
        background: "var(--surface)",
        padding: "80px 44px",
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
        <div className="section-label">02 — Enfoque</div>

        {/* Cards grid — gap trick for 1px lines */}
        <div
          className="approach-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {CARDS.map((card) => (
            <div key={card.index} className="approach-card">
              {/* Index */}
              <p
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "0.6rem",
                  color: "var(--earth)",
                  letterSpacing: "0.1em",
                  marginBottom: "1.25rem",
                }}
              >
                {card.index}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: "var(--off-white)",
                  marginBottom: "1rem",
                }}
              >
                {card.titleParts.map((part, i) =>
                  i === card.italicIndex ? (
                    <em
                      key={i}
                      style={{ fontStyle: "italic", color: "var(--accent2)" }}
                    >
                      {part}
                    </em>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "0.68rem",
                  lineHeight: 1.85,
                  color: "var(--warm-mid)",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
