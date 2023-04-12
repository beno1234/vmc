import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { parceria } from "../constants";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "10px",
  autoplay: true,
  autoplaySpeed: 1000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },
  ],
};

const Carousel = () => {
  return (
    <section className="bg-slate-800 p-10">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Nossos Parceiros
        </p>
      </div>
      <div className="text-center mt-32"></div>
      <Slider {...settings} className="mx-auto mt-40 mb-60 content-center">
        {parceria.map((client) => (
          <div key={client.id}>
            <img
              src={client.parceiro}
              alt="client_logo"
              className="mx-auto h-[70px]"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
