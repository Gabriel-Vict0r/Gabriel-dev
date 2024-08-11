"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "./CardCarousel";
import ArrowCarousel from "./ArrowCarousel";
import { FaChevronLeft } from "react-icons/fa";
import { Sides } from "@/models/enums/all";
import { IContributions, IRepositoryProject } from "@/models/interfaces/all";

type Props = {};

const CarouselComponent = (props: Props) => {
  const nameProjects = [
    "be-happy",
    "ciphery",
    "housafe",
    "xml-discover",
    "next-petschirmer",
  ];
  const [projects, setProjects] = useState<IRepositoryProject[]>([]);
  useEffect(() => {
    const getProjects = async () => {
      const request = await fetch(process.env.URL_GIT!, {
        headers: {
          authorization: process.env.GIT_TOKEN!,
        },
      });
      const result = await request.json();
      //console.log(typeof result);
      result.map((project: IRepositoryProject, index: number) => {
        let result = nameProjects.filter((name) => name === project.name);
        if (result.length > 0) {
          //console.log("rodou o ", result[0]);
          setProjects((prev) => [...prev, project]);
        }
      });
    };
    getProjects();
  }, []);
  //projects.map((project) => console.log(project));

  const petSchirmer: IContributions = {
    name: "Pet Schirmer",
    description:
      "Site institucional dedicado ao bem-estar animal, oferecendo serviços de cuidados para pets.",
    html_url: "https://github.com/deniseschirmer/next-petschirmer",
    homepage: "https://next-petschirmer-deniseschirmer.vercel.app/",
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      arrows
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={500}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={1300}
      customRightArrow={<ArrowCarousel side={Sides.RIGHT} />}
      customLeftArrow={<ArrowCarousel side={Sides.LEFT} />}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className="w-full"
    >
      {projects.map((project) => (
        <CardCarousel props={project} key={project.id} />
      ))}
      <CardCarousel props={petSchirmer} />
    </Carousel>
  );
};

export default CarouselComponent;
