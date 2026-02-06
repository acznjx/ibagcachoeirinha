import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "IBAG Cachoeirinha | Igreja Batista Amor e Graça",
  description: "Um lugar de novas vidas em Cachoeirinha, RS.",
  icons: {
    icon: "https://i.imgur.com/lq7AezJ.png",
    shortcut: "https://i.imgur.com/lq7AezJ.png",
    apple: "https://i.imgur.com/lq7AezJ.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-black text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}