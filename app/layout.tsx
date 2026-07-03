import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ux.tec.br"),
  title: {
    default: "Sites para Motoclubes | Estrada Digital by UX Consultancy",
    template: "%s | Estrada Digital by UX Consultancy",
  },
  description:
    "Uma solução UX Consultancy para criar sites institucionais que organizam história, sedes, eventos e identidade de motoclubes.",
  creator: "UX Consultancy",
  publisher: "UX Consultancy",
  keywords: [
    "site para motoclube",
    "criação de sites para motoclubes",
    "site institucional",
    "presença digital motoclube",
  ],
  openGraph: {
    title: "Sites institucionais para motoclubes | Estrada Digital",
    description: "Uma solução UX Consultancy para levar história, identidade e estrada a uma presença digital oficial.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/hero-estrada.png", width: 1881, height: 836 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sites institucionais para motoclubes | Estrada Digital",
    description: "Uma solução UX Consultancy para preservar histórias e fortalecer a presença digital dos motoclubes.",
    images: ["/images/hero-estrada.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c0d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} bg-ink text-paper antialiased`}>
        {children}
      </body>
    </html>
  );
}
