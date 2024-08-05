import { IHabilities } from "@/models/interfaces/all";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiJesterHat } from "react-icons/gi";
import { SiPrisma } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { FaCss3 } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { VscSymbolInterface } from "react-icons/vsc";
import { GrFolderCycle } from "react-icons/gr";
export const habFrontEnd: IHabilities[] = [
  {
    name: "Next.JS",
    icon: <SiNextdotjs />,
  },
  {
    name: "ReactJs",
    icon: <FaReact />,
  },
  {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "CSS-in-JS",
    icon: <FaCss3 />,
  },
  {
    name: "Jest",
    icon: <GiJesterHat />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
];

export const habBackEnd: IHabilities[] = [
  {
    name: "NodeJs",
    icon: <FaNodeJs />,
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql />,
  },
  {
    name: "SQL",
    icon: <BsFiletypeSql />,
  },
  {
    name: "Web APIs",
    icon: <VscSymbolInterface />,
  },
  {
    name: "MVC",
    icon: <GrFolderCycle />,
  },
];
