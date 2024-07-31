import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
