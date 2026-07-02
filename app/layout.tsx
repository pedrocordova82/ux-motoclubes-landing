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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://estradadigital.com.br"),
  title: {
    default: "Sites para Motoclubes | Estrada Digital",
    template: "%s | Estrada Digital",
  },
  description:
    "Sites institucionais para motoclubes que organizam história, sedes, eventos e identidade em uma presença digital oficial.",
  keywords: [
    "site para motoclube",
    "criação de sites para motoclubes",
    "site institucional",
    "presença digital motoclube",
  ],
  openGraph: {
    title: "Sites institucionais para motoclubes",
    description: "História, identidade e estrada em uma presença digital à altura do seu motoclube.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/hero-estrada.png", width: 1881, height: 836 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sites institucionais para motoclubes",
    description: "Uma presença digital oficial para preservar histórias e fortalecer a irmandade.",
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
