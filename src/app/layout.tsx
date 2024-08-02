import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
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
      <body
        className={`${inter.className}${bebas.className} bg-background text-white-standard`}
      >
        <Image
          src="/section1-light-left.png"
          width={833.19}
          height={562.5}
          alt="ponto de luz"
          className="absolute -left-4 -z-10 top-0 md:-top-10 md:-left-24"
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
