"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "./CardCarousel";
import ArrowCarousel from "./ArrowCarousel";
import { FaChevronLeft } from "react-icons/fa";
import { Sides } from "@/models/enums/all";

type Props = {};

const CarouselComponent = (props: Props) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const request = await fetch(process.env.URL_GIT!, {
        headers: {
          authorization: process.env.GIT_TOKEN!,
        },
      });
      const result = await request.json();
      console.log(typeof result);
      const filtered = result.filter((project) => project.license !== null);
      setProjects(filtered);
    };
    getProjects();
  }, []);
  projects.map((project) => console.log(project));
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
      showDots={true}
      arrows
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .6"
      transitionDuration={1300}
      customRightArrow={<ArrowCarousel side={Sides.RIGHT} />}
      customLeftArrow={<ArrowCarousel side={Sides.LEFT} />}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className="w-full"
    >
      <CardCarousel />
      <CardCarousel />
      <CardCarousel />
    </Carousel>
  );
};

export default CarouselComponent;
