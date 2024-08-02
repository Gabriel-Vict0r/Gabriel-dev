"use client";
import { MotionConfig, Variants } from "framer-motion";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import BtnGradient from "./BtnGradient";
type INavLink = { name: string; route: string }[];
const Header = () => {
  const navLinks: INavLink = [
    { name: "Início", route: "/" },
    { name: "Sobre", route: "#about" },
    { name: "Projetos", route: "#projects" },
    { name: "Serviços", route: "#services" },
    { name: "Contate-me", route: "#contact" },
  ];
  const [showNav, setShowNav] = useState<boolean>(false);
  function toggleNav() {
    showNav ? setShowNav(false) : setShowNav(true);
  }
  const variants: Variants = {
    open: { opacity: 1, x: 0, y: 0, display: "block" },
    closed: { opacity: 0, x: 180, display: "none" },
  };

  return (
    <header className="p-5 lg:px-52 lg:flex w-full lg:justify-between fixed top-0">
      <div className="flex justify-between items-center text-white-standard">
        <Image src="/logo.svg" width={150} height={100} alt="Logo pessoal" />
        <div className="lg:hidden">
          <Hamburger rounded size={25} onToggle={toggleNav} toggled={showNav} />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        variants={variants}
        animate={showNav ? "open" : "closed"}
        transition={{ duration: 0.2 }}
      >
        <nav className="bg-background absolute w-full h-screen left-0 py-5">
          <ul className="flex flex-col items-center font-inter text-lg font-normal w-full">
            {navLinks.map((link, index) => (
              <li key={index} className="p-2">
                <Link href={link.route}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
      <nav className="hidden lg:!flex justify-around items-center">
        <ul className="flex">
          {navLinks.map((link, index) =>
            index !== 4 ? (
              <li key={index} className="p-2">
                <Link href={link.route}>{link.name}</Link>
              </li>
            ) : null
          )}
        </ul>
      </nav>
      <div className="hidden lg:!flex">
        <BtnGradient url="#contact" label="Contate-me" />
      </div>
    </header>
  );
};

export default Header;
