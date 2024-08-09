"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import LinkCard from "./LinkCard";
import { IRepositoryProject } from "@/models/interfaces/all";

interface IRepo {
  owner: string;
  repo: string;
}

const CardCarousel = ({ props }: { props: IRepositoryProject }) => {
  const [urlImage, setUrlImage] = useState<string | null>();
  useEffect(() => {
    const getIimage = async () => {
      const request = await fetch(
        `https://api.github.com/repos/${props.owner.login}/${props.name}/readme`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            authorization: process.env.GIT_TOKEN!,
          },
        }
      );
      const result = await request.json();
      const readmeContent = atob(result.content);
      //console.log(readmeContent);

      const regex = /https:\/\/github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+\/blob\/main\/[A-Za-z0-9_-]+\.[A-Za-z]+/;
      const match = readmeContent.match(regex);
      console.log("regex encontrada", match);
      if (match !== null) setUrlImage(match![0]);
    };
    getIimage();
  }, []);

  console.log(urlImage);
  return (
    <div className=" bg-bg-secondary rounded-xl mx-4">
      <Image
        src={urlImage ? urlImage : "/cover.png"}
        width={400}
        height={400}
        alt="cover"
        objectFit="cover"
        className="w-full max-h-[223px] rounded-t-xl"
      />
      <div className="p-5 flex flex-col gap-3">
        <h5 className="font-semibold text-xl">{props.name}</h5>
        <p>{props.description}</p>
        <div className="flex itens-center justify-end gap-5 text-2xl">
          <LinkCard link={props.html_url}>
            <FaGithub />
          </LinkCard>
          <LinkCard link={props.homepage}>
            <FaLink />
          </LinkCard>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
