import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-24">
      <section className="flex flex-col gap-5 items-center md:flex-row xl:px-52 lg:mt-44 lg:px-20">
        <div className="flex flex-col gap-5 p-5 md:w-1/2">
          <h1 className="font-semibold text-4xl text-white-standard md:text-3xl lg:text-4xl xl:text-5xl">
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
    </main>
  );
}
