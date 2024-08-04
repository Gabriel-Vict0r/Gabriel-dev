import { ICardContent } from "@/models/interfaces/all";
import Image from "next/image";
import React from "react";

type Props = {};

const CardService = ({ title, paragraph, imageUrl }: ICardContent) => {
  return (
    <div
      className="p-5 flex flex-col items-center gap-5 bg-no-repeat bg-right-top md:w-[45%] md:justify-end"
      style={{
        backgroundImage:
          "url(/Pontos-background.svg), linear-gradient(190deg, #21283E, #394159)",
      }}
    >
      <Image
        src={imageUrl}
        width={174}
        height={244.35}
        alt="Computador"
        className="w-[154px]"
      />
      <div>
        <h4 className="font-semibold text-xl mb-2">{title}</h4>
        <p className="font-light text-base">{paragraph}</p>
      </div>
    </div>
  );
};

export default CardService;
