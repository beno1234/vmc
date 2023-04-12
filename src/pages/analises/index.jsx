import React from "react";
import lab from "../../assets/homem-labs.jpeg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:pt-0 pt-16">
      <div className="flex flex-col items-center justify-center max-w-screen-lg px-4 md:px-0 md:flex-row md:justify-center md:gap-x-12">
        <div className="max-w-xl  md:text-left">
          <h2 className="text-sm font-extrabold text-green-500">
            SOLUÇÕES QUE COMBINAM COM VOCÊ
          </h2>
          <p className="mt-4 text-xl font-bold text-gray-700 sm:text-2xl">
            Trabalhamos em colaboração com nossos clientes para descobrir a
            maneira mais eficaz e eficiente de atender às suas necessidades.
          </p>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Na VMC, acreditamos que existe melhor forma de atender as
            necessidades de nossos clientes precisa. Somos uma empresa que
            existe para ajudá-lo a alcançar mais do que você jamais pensou ser
            possível.
          </p>
          <p className="mt-4 text-lg text-gray-500 sm:text-xl">
            Compreender todos os pontos de contato exclusivos de cada cliente é
            essencial para o nosso negócio. Nosso foco é construir conexões
            confiáveis, resultados surpreendentes e experiências confiáveis
            ​​que sejam tão úteis quanto memoráveis.
          </p>
          <p className="mt-4 text-lg text-gray-500 sm:text-xl">
            Vamos fazer grandes coisas juntos. Mal podemos esperar para
            trabalhar com você.
          </p>
          <a
            href="#"
            className="inline-block mt-6 font-medium text-gray-500 hover:text-gray-600 focus:outline-none focus:underline underline"
          >
            Entrar em contato
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            className="w-full h-auto object-cover md:w-[500px] md:h-[600px] filter "
            src={lab}
            alt="Laboratory"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
