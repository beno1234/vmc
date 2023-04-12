import React from "react";
import remedio from "../../assets/remedio.jpeg";
import card2 from "../../assets/agua.jpeg";
import analise from "../../assets/analise-homem.jpeg";
import card3 from "../../assets/mulher-analisando.jpeg";
import microbios from "../../assets/microbios.webp";
import "./index.css";

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-sm font-bold text-green-500 tracking-tight">
            SERVIÇOS
          </h2>
          <p className="mt-4 max-w-2xl text-3xl font-bold text-gray-900">
            Desde nosso processo testado em batalha até nosso confiável
            atendimento ao cliente, estamos aqui para você
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Nossa ampla gama de serviços é apoiada pelo conhecimento da
            indústria e nossa paixão em ajudar os clientes a encontrar soluções
            perfeitamente adaptadas às suas necessidades.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="group rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 filter">
            <img
              className="w-full h-56 object-cover"
              src={analise}
              alt="Card 2"
            />
            <div className="px-4 py-4 bg-white">
              <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-500">
                Análise Nutricional
              </h3>
            </div>
          </div>

          <div className="group rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 filter">
            <img
              className="w-full h-56 object-cover"
              src={card3}
              alt="Card 2"
            />
            <div className="px-4 py-4 bg-white">
              <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-500">
                Produtos Cosméticos
              </h3>
            </div>
          </div>

          <div className="group rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 filter">
            <img
              className="w-full h-56 object-cover"
              src={card2}
              alt="Card 2"
            />
            <div className="px-4 py-4 bg-white">
              <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-500">
                Microbiológicas de Água
              </h3>
            </div>
          </div>

          <div className="group rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 filter">
            <img
              className="w-full h-56 object-cover"
              src={remedio}
              alt="Card 2"
            />
            <div className="px-4 py-4 bg-white">
              <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-500">
                Eficácia e Estabilidade de Medicamentos
              </h3>
            </div>
          </div>

          <div className="group rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 filter">
            <img
              className="w-full h-56 object-cover "
              src={microbios}
              alt="Card 2"
            />
            <div className="px-4 py-4 bg-white">
              <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-500">
                Controle Microbiológico
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
