import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import LinkCard from "./LinkCard";
import { IContributions, IRepositoryProject } from "@/models/interfaces/all";
import { Types } from "@/models/enums/all";

interface IRepo {
  owner: string;
  repo: string;
}

const CardCarousel = ({
  props,
}: {
  props: IRepositoryProject | IContributions;
}) => {
  function switchImage(name: string): string {
    switch (name) {
      case "be-happy":
        return "/covers/be-happy.png";
      case "ciphery":
        return "/covers/ciphery.png";
      case "housafe":
        return "/covers/housafe.png";
      case "Pet Schirmer":
        return "/covers/pet-schirmer.png";
      default:
        return "";
    }
  }

  return (
    <div className=" bg-bg-secondary rounded-xl mx-4">
      <Image
        src={switchImage(props.name)}
        width={400}
        height={400}
        alt={`Capa do ${props.name}`}
        className="w-full h-[223px] rounded-t-xl object-cover"
      />
      <div className="p-5 flex flex-col gap-3 h-[204px] justify-between">
        <p className="font-semibold text-xl">{props.name}</p>
        <p className="font-extralight text-base">{props.description}</p>
        <div className="flex itens-center justify-end gap-5 text-2xl">
          <LinkCard link={props.html_url} type={Types.GITHUB}>
            <FaGithub />
          </LinkCard>
          <LinkCard link={props.homepage} type={Types.DEPLOY}>
            <FaLink />
          </LinkCard>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
