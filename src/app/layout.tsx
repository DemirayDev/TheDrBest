// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EstheticLineTurkey - Estetik ve Güzelliğin Yeni Çağı",
  description:
    "Modern tıbbın sunduğu en yenilikçi ve güvenli medikal estetik çözümleriyle tanışın. EstheticLineTurkey, sizlere minimal müdahale ile maksimal güzellik kazandırmayı amaçlayan bir dizi kişiye özel tedavi sunar.",
  keywords: [
    "estetik",
    "güzellik",
    "medikal estetik",
    "yüz estetiği",
    "vücut estetiği",
    "Türkiye",
  ],
  authors: [{ name: "EstheticLineTurkey" }],
  openGraph: {
    title: "EstheticLineTurkey - Estetik ve Güzelliğin Yeni Çağı",
    description:
      "Modern tıbbın sunduğu en yenilikçi ve güvenli medikal estetik çözümleriyle tanışın.",
    url: "https://www.estheticlineturkey.com",
    siteName: "EstheticLineTurkey",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EstheticLineTurkey Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${playfair.variable} ${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
