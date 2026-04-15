import type { Metadata } from "next";
import { Space_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nodera.vercel.app"),
  title: "Nodera Labs — IA Industrial para América del Sur",
  description:
    "Productos con inteligencia artificial para los sectores productivos que mueven la economía de América del Sur.",
  openGraph: {
    title: "Nodera Labs — IA Industrial para América del Sur",
    description:
      "Productos con inteligencia artificial para los sectores productivos que mueven la economía de América del Sur.",
    siteName: "Nodera Labs",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nodera Labs — IA Industrial para América del Sur",
    description:
      "Productos con inteligencia artificial para los sectores productivos que mueven la economía de América del Sur.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
