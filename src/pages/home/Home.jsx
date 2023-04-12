import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import micro from "../../assets/fruits.jpeg";
import Solutions from "../analises";
import About from "../analises";
import Services from "../feature";
import Contact from "../welcome";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <div
          className="relative flex flex-col items-center justify-center flex-grow bg-center bg-cover"
          style={{
            backgroundImage: `url(${micro})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="pl-6 lg:pl-16 xl:pl-24">
            <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Descubra o que você realmente está consumindo
            </h1>
            <p className="relative mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl z-10 leading-8 text-white">
              Nossas análises detalhadas protegem sua saúde e beleza
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-left gap-4 sm:gap-x-6 mt-6">
              <button className="relative z-10 px-4 sm:px-8 py-3 font-medium text-white bg-[#06a996] rounded-md hover:filter hover:saturate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                <a>Nossos serviços</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
