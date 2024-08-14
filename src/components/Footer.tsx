import { contentLinksFooter } from "@/utils/content/linksFooter";
import React from "react";
import LinkFooter from "./LinkFooter";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="p-5 lg:px-20 xl:px-52 bg-gradient-to-r from-blue-primary to-blue-secondary lg:flex lg:justify-between">
      <p className="text-center mb-3 text-base font-extralight">
        Copyright &copy; Gabriel Victor Desenvolvedor FullStack 2024
      </p>
      <div className="flex gap-5 w-full items-center justify-center lg:w-auto">
        {contentLinksFooter.map((content, i) => (
          <LinkFooter url={content.url} key={i}>
            {content.children}
          </LinkFooter>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
