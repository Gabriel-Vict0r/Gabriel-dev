import BtnGradient from "@/components/BtnGradient";
import CardService from "@/components/CardService";
import CarouselComponent from "@/components/Carrousel";
import Carrousel from "@/components/Carrousel";
import ContainerHabilities from "@/components/ContainerHabilities";
import DivSeparator from "@/components/DivSeparator";
import Hability from "@/components/Hability";
import { cardsContent } from "@/utils/content/cards";
import { habBackEnd, habFrontEnd } from "@/utils/content/habilities";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-24">
      <section
        className="flex flex-col gap-5 items-center md:flex-row lg:mt-44 lg:px-20 xl:px-52 md:px-10"
        id="inicio"
      >
        <div className="flex flex-col gap-5 p-5 md:w-1/2 relative">
          <Image
            src="/Circulo.svg"
            width={399}
            height={399}
            alt="circulo"
            className="hidden lg:!block absolute -top-20 -left-20"
          />
          <h1 className="font-semibold text-3xl text-white-standard md:text-3xl lg:text-4xl xl:text-5xl">
            Olá, meu nome é Gabriel Victor, um{" "}
            <span className="text-blue-primary bg-clip-text">
              Desenvolvedor FullStack
            </span>
          </h1>
          <p className="font-light text-lg text-slate-300">
            Junte-se a mim para criarmos juntos projetos incríveis que irão
            impactar positivamente sua empresa e seus usuários.
          </p>
        </div>
        <div className="relative p-5 md:w-1/2">
          <Image
            src="/Computador.svg"
            width={525}
            height={492}
            alt="Ilustração de um computador"
            className="w-10/12 md:w-full lg:w-4/5"
          />
        </div>
        <Image
          src="/section1-light-right.png"
          width={326.75}
          height={438.35}
          alt="Ponto de luz direito"
          className="hidden md:!block absolute right-0 -z-10 md:top-10 lg:top-20 lg:w-[35%]"
        />
      </section>
      <DivSeparator
        id="habilities"
        title="Serviços"
        text="Como eu posso te ajudar?"
      />
      <section className="p-5 flex flex-col gap-5 md:flex-row md:flex-wrap  justify-center lg:px-20 xl:px-52 relative">
        <Image
          src="/Elemento 1.svg"
          width={249}
          height={573}
          alt="elemento 1"
          className="absolute left-0 -z-10"
        />
        <Image
          src="/section2-light-right.png"
          width={324.23}
          height={330.72}
          alt="elemento 2"
          className="absolute -top-10 right-0 -z-10"
        />
        {cardsContent.map((card, index) => (
          <CardService
            title={card.title}
            paragraph={card.paragraph}
            imageUrl={card.imageUrl}
            key={index}
          />
        ))}
        <Image
          src="/section2-light-left.png"
          width={279.82}
          height={167.76}
          alt="ponto de luz"
          className="absolute left-0 bottom-0 -z-10"
        />
        <Image
          src="/retangle-decorator.svg"
          width={340}
          height={340}
          alt="quadro com ponto de luz"
          className="absolute -bottom-2 right-0 md:-bottom-7 md:right-2 lg:right-16 xl:right-48"
        />
      </section>
      <div className="my-16 w-full text-center">
        <BtnGradient label="Tirar idéia do papel" url="#form" />
      </div>
      <DivSeparator
        title="Habilidades"
        text="Minhas principais habilidades técnicas"
        id="habilities"
      />
      <section className="lg:px-20 xl:px-52 p-5 flex flex-col gap-10 relative">
        <hr className="border border-bg-secondary border-solid" />
        <Image
          src="Elemento 2.svg"
          width={162.9}
          height={622}
          alt="Elemento decorativo"
          className="absolute right-0 -z-10"
        />
        <ContainerHabilities title="Front-end">
          {habFrontEnd.map((hability, index) => (
            <Hability name={hability.name} icon={hability.icon} key={index} />
          ))}
        </ContainerHabilities>
        <ContainerHabilities title="Back-end">
          {habBackEnd.map((hability, index) => (
            <Hability name={hability.name} icon={hability.icon} key={index} />
          ))}
        </ContainerHabilities>
      </section>
      <DivSeparator
        title="Projetos"
        text="Uma breve apresentação dos projetos realizados. Alguns deles 
fazem parte do meu trabalho como freelancer e outros são 
projetos criados para prática de estudos."
        id="habilities"
      />
      <section className="lg:px-20 xl:px-52 p-5">
        <CarouselComponent />
      </section>
    </main>
  );
}
