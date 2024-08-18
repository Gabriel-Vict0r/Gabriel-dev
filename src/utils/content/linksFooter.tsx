import { ILinkFooter } from "@/models/interfaces/all";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export const contentLinksFooter: ILinkFooter[] = [
  {
    url:
      "https://wa.me/5577999030842?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os...",
    children: <FaWhatsapp />,
    label: "Redirecionar para o whatsapp",
  },
  {
    url: "https://github.com/Gabriel-Vict0r",
    children: <FaGithub />,
    label: "Redirecionar para o github",
  },
  {
    url: "www.linkedin.com/in/gabriel-victor-webdeveloper",
    children: <FaLinkedinIn />,
    label: "Redirecionar para o linkedIn",
  },
];
