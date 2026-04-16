import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos centralizados en el servidor para un SEO impecable
export const metadata: Metadata = {
  title: "Álvaro Rubio López | Ingeniero de Sistemas y CEO",
  description:
    "Portafolio profesional de Álvaro Rubio López. Experto en Soluciones de Software Empresarial, Agentes de IA y Optimización de Operaciones Logísticas.",
  keywords: [
    "Álvaro Rubio López",
    "Ingeniero de Sistemas",
    "IA Empresarial",
    "Agentes de IA",
    "SEO Semántico",
    "Logística Aeroportuaria",
    "ProDigital.lat",
  ],
  authors: [{ name: "Álvaro Rubio López" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900"
      >
        {children}
      </body>
    </html>
  );
}
