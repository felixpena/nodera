"use client";

import { useState, FormEvent, ChangeEvent } from "react";

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

type Status = "idle" | "sending" | "success" | "error";

const INITIAL = {
  empresa: "",
  sector: "",
  nombre: "",
  email: "",
  desafio: "",
};

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState(INITIAL);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/mqeweqok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data?.error ?? "Error al enviar. Intenta nuevamente."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Sin conexión. Intenta nuevamente.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
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
        <div className="section-label">04 — Contacto</div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left: statement */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.3,
                fontWeight: 400,
                color: "var(--off-white)",
                marginBottom: "2rem",
              }}
            >
              ¿Tienes un desafío en tu industria? Hablemos.
            </p>
            <p
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "15px",
                lineHeight: 1.85,
                color: "var(--warm-mid)",
              }}
            >
              Estamos en modo stealth, pero conversamos con empresas de los
              sectores productivos de la región. Si identificas una oportunidad
              real, queremos escucharte.
            </p>
          </div>

          {/* Right: form */}
          <div>
            {status === "success" ? (
              <div
                className="contact-box"
                style={{
                  textAlign: "center",
                  padding: "48px 40px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-instrument-serif), serif",
                    fontSize: "1.375rem",
                    color: "var(--accent)",
                    marginBottom: "1rem",
                  }}
                >
                  Mensaje recibido.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: "15px",
                    color: "var(--warm-mid)",
                    lineHeight: 1.8,
                  }}
                >
                  Te contactaremos pronto si existe una oportunidad de trabajo
                  conjunto.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="contact-box"
              >
                {/* Row 1: Empresa + Sector */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="empresa"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-space-mono), monospace",
                        fontSize: "11px",
                        color: "var(--earth-light)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Empresa *
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      placeholder="Nombre empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sector"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-space-mono), monospace",
                        fontSize: "11px",
                        color: "var(--earth-light)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Sector *
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      required
                      value={form.sector}
                      onChange={handleChange}
                      className="form-input"
                      style={{
                        cursor: "pointer",
                        color: form.sector
                          ? "var(--off-white)"
                          : "var(--warm-mid)",
                      }}
                    >
                      <option value="" disabled>
                        Seleccionar
                      </option>
                      {SECTORS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 2: Nombre + Email */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="nombre"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-space-mono), monospace",
                        fontSize: "11px",
                        color: "var(--earth-light)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-space-mono), monospace",
                        fontSize: "11px",
                        color: "var(--earth-light)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@empresa.cl"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Desafío */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="desafio"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-space-mono), monospace",
                      fontSize: "11px",
                      color: "var(--earth-light)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Desafío *
                  </label>
                  <textarea
                    id="desafio"
                    name="desafio"
                    required
                    rows={4}
                    placeholder="Describe el desafío o proyecto..."
                    value={form.desafio}
                    onChange={handleChange}
                    className="form-input"
                    style={{ resize: "vertical", minHeight: 140 }}
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p
                    style={{
                      fontFamily: "var(--font-space-mono), monospace",
                      fontSize: "13px",
                      color: "#b87c5d",
                      marginBottom: "1rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="submit-btn"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
