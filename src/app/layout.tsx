import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";
import localFont from "next/font/local";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
const atary = localFont({ src: "../fonts/Atary_Demo.otf" });
export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de projetos pessoais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-white-standard`}>
        <div
          className="w-[823.19px] h-[562.5px] bg-blue-primary blur-[300px] rotate-[84.19deg] absolute -left-[700px] -z-10 top-0"
          aria-label="ponto de luz ilustrado"
        ></div>

        <Header />
        {children}
      </body>
    </html>
  );
}
