export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--black)",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 44px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--off-white)",
            textDecoration: "none",
            letterSpacing: "0.18em",
          }}
        >
          Nodera
          <span style={{ color: "var(--accent)" }}>.</span>
          Labs
        </a>

        {/* Right side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* Nav links */}
          <div
            className="nav-links"
            style={{
              display: "flex",
              gap: "1.75rem",
            }}
          >
            {[
              { label: "Productos", href: "#productos" },
              { label: "Sectores", href: "#sectores" },
              { label: "Contacto", href: "#contacto" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="nav-link"
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "13px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}
