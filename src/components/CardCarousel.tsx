import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import LinkCard from "./LinkCard";
type Props = {};

const CardCarousel = (props: Props) => {
  return (
    <div className=" bg-bg-secondary rounded-xl mx-4">
      <Image
        src="/cover.png"
        width={400}
        height={400}
        alt="cover"
        objectFit="cover"
        className="w-full max-h-[223px] rounded-t-xl"
      />
      <div className="p-5 flex flex-col gap-3">
        <h5 className="font-semibold text-xl">Be Happy</h5>
        <p>
          Aplicação web que visa promover a visibilidade de instituições de
          acolhimento.
        </p>
        <div className="flex itens-center justify-end gap-5 text-2xl">
          <LinkCard link="">
            <FaGithub />
          </LinkCard>
          <LinkCard link="">
            <FaLink />
          </LinkCard>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
