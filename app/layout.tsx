import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// Inter para o corpo do texto e Montserrat para títulos fortes
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

// 1. CONFIGURAÇÃO DE SEO PARA A IGREJA
export const metadata: Metadata = {
  title: "IBAG Cachoeirinha | Igreja Batista Amor e Graça",
  description: "Um lugar de novas vidas em Cachoeirinha, RS. Junte-se a nós em nossos cultos de celebração e oração.",
  keywords: ["Igreja em Cachoeirinha", "IBAG", "Igreja Batista Amor e Graça", "Cultos Domingo Cachoeirinha"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "IBAG Cachoeirinha | Um lugar de novas vidas",
    description: "Venha fazer parte da nossa família.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-black text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}