import BtnGradient from "@/components/BtnGradient";
import CardService from "@/components/CardService";
import CarouselComponent from "@/components/Carrousel";
import Carrousel from "@/components/Carrousel";
import ContainerHabilities from "@/components/ContainerHabilities";
import DivSeparator from "@/components/DivSeparator";
import Form from "@/components/Form";
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
        <Image
          src="/Computador.svg"
          width={525}
          height={492}
          alt="Ilustração de um computador"
          className="w-[325px] xl:w-[525px]"
        />
        <Image
          src="/section1-light-right.png"
          width={326.75}
          height={438.35}
          alt="Ponto de luz direito"
          className="hidden md:!block absolute right-0 -z-10 md:top-10 lg:top-20 lg:w-[35%]"
        />
      </section>
      <DivSeparator
        id="services"
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
        <BtnGradient label="Tirar idéia do papel" url="#contact" />
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
        id="projects"
      />
      <section className="lg:px-20 xl:px-52 p-5 relative">
        <Image
          src="Elemento 3.svg"
          width={178.62}
          height={280.94}
          alt="Elemento decorativo"
          className=" absolute left-0 -z-10 top-36"
        />
        <div className="w-[591px] lg:w-[991.15px] h-[562.5px] bg-blue-primary rotate-[84.91deg] rounded-full blur-[300px] absolute left-[-549px] -z-10"></div>
        <CarouselComponent />
      </section>
      <div className="w-full bg-gradient-to-r from-blue-primary to-blue-secondary text-center py-10  overflow-hidden my-10">
        <h2 className="font-bold font-atary text-3xl lg:text-5xl relative animate-words-move m-0 text-nowrap tracking-widest">
          Desenvolvedor FullStack &lt;/&gt; Desenvolvedor FullStack &lt;/&gt;
        </h2>
      </div>
      <section className="p-5 flex flex-col gap-5 items-center md:flex-row lg:px-20 xl:px-52 xl:gap-20">
        <div
          className="w-[591px] lg:w-[991.15px] h-[562.5px] bg-blue-primary rotate-[84.91deg] rounded-full blur-[300px] absolute left-[-549px] -z-10 xl:h-[262px] xl:w-[591px]"
          id="about"
        ></div>
        <Image
          src="/profile.png"
          width={428.56}
          height={462.04}
          alt="Minha foto de perfil"
          className="w-[70%] md:w-[40%]"
        />
        <article className="flex flex-col gap-5 relative mt-10 md:w-[80%]">
          <h3 className="font-semibold text-3xl">Quem sou eu</h3>
          <p className="font-extralight w-11/12 text-base">
            Desenvolvedor FullStack apaixonado por transformar ideias em
            soluções digitais eficientes e inovadoras. Com um bom tempo de
            experiência na criação de aplicações robustas e escaláveis, sou
            formado pelo IFBA - campus Barreiras e atualmente curso Análise e
            Desenvolvimento de Sistemas. Possuo sólidos conhecimentos das
            linguagens em JavaScript/TypeScript, Next.js, Node.js, PostgreSQL,
            entre outras ferramentas essenciais do ecossistema web. Atualmente
            atuo como desenvolvedor de software, focado em entregar resultados
            que combinam qualidade técnica e inovação.
          </p>
          <Image
            src="circle-about-me.svg"
            width={449.96}
            height={449.96}
            alt="circulo decorativo"
            className="absolute -top-5 -right-5 w-[70%] md:-top-20 xl:-top-32 xl:-right-20"
          />
        </article>
      </section>

      <section className="p-5 my-5 lg:px-20 xl:px-52 relative">
        <Image
          src="Elemento 4.svg"
          width={243.43}
          height={358.72}
          alt="Elemento decorativo"
          className=" absolute left-0 -z-10 top-10"
        />
        <div className="w-[287.35px] h-[241.47px] bg-blue-primary rounded-full blur-[130px] rotate-[84px] absolute right-0 bottom-0 -z-10"></div>
        <div
          className="border-t-2 border-bg-secondary border-solid w-full py-10 "
          id="contact"
        >
          <Form />
        </div>
      </section>
    </main>
  );
}
