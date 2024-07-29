"use client";
import { MotionConfig } from "framer-motion";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
  return (
    <header className="p-5 relative">
      <div className="flex justify-between items-center text-white-standard">
        <Image src="/logo.svg" width={150} height={100} alt="Logo pessoal" />
        <Hamburger rounded size={25} onToggle={toggleNav} toggled={showNav} />
      </div>
      {showNav && (
        <motion.div initial={{ x: -100 }}>
          <nav className="bg-background absolute top-[85px] w-full h-screen left-0 py-5">
            <ul className="flex flex-col items-center font-inter text-lg font-normal">
              {navLinks.map((link, index) => (
                <li key={index} className="p-2">
                  <Link href={link.route}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
