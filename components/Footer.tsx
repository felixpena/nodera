export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
        padding: "28px 44px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.55rem",
            color: "rgba(255,255,255,0.18)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          © 2025 Nodera Labs
        </span>

        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.55rem",
            color: "rgba(255,255,255,0.18)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Santiago, Chile · América del Sur
        </span>
      </div>
    </footer>
  );
}
