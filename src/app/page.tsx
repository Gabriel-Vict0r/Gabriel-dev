import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-24">
      <section className="flex flex-col gap-5 items-center md:flex-row">
        <div className="flex flex-col gap-5 p-5">
          <h1 className="font-semibold text-4xl text-white-standard md:text-3xl">
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
        <div className="relative p-5">
          <Image
            src="/Computador.svg"
            width={525}
            height={492}
            alt="Ilustração de um computador"
            className="w-10/12 md:w-full"
          />
          <Image
            src="/section1-light-right.png"
            width={326.75}
            height={438.35}
            alt="Ponto de luz direito"
            className="absolute right-0 -z-10 top-0"
          />
        </div>
      </section>
    </main>
  );
}
