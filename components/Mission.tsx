export default function Mission() {
  return (
    <section
      id="mision"
      style={{
        background: "var(--black)",
        padding: "80px 44px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Section label */}
        <div className="section-label">01 — Misión</div>

        {/* Grid */}
        <div
          className="mission-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 4fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left: statement */}
          <p
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: "clamp(28px, 3.2vw, 44px)",
              lineHeight: 1.2,
              fontWeight: 400,
              color: "var(--off-white)",
            }}
          >
            Aplicamos inteligencia artificial a los sectores{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--accent2)",
              }}
            >
              productivos
            </em>{" "}
            que sostienen la economía real de América del Sur.
          </p>

          {/* Right: body copy */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "15px",
                lineHeight: 1.9,
                letterSpacing: "0.03em",
                color: "var(--warm-mid)",
              }}
            >
              América del Sur tiene una concentración única de recursos
              naturales, infraestructura crítica y capacidad industrial. Estos
              sectores operan con procesos complejos, ciclos largos y márgenes
              ajustados donde la tecnología todavía no llegó con profundidad.
            </p>
            <p
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "15px",
                lineHeight: 1.9,
                letterSpacing: "0.03em",
                color: "var(--warm-mid)",
              }}
            >
              Nodera Labs construye productos verticales de IA diseñados desde
              el dominio sectorial. No consultoría. No proyectos a medida.
              Productos que se despliegan, escalan y operan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
