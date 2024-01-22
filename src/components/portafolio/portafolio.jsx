import React from "react";
import "./portafolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BikeBazzar from "../../imagenes/Captura de pantalla bike-bazaar.png";
import Penger from "../../imagenes/pengersolutions-captura.png";
import Vollx from "../../imagenes/Captura de pantalla vollx.png";
import Mey from "../../imagenes/meyblaks-captura.png";
import Chess from "../../imagenes/Captura de pantalla chess app.png";
import Draw from "../../imagenes/draw-app.png";
import VectorSoluciones from "../../imagenes/img-vector-soluciones.png";
import GenesisdeHerencia from "../../imagenes/img-genesis-de-herencia.png";
import Movie from "../../imagenes/Captura de pantalla movie app.png";
import Nigiri from "../../imagenes/nigiri-captura.png";

function Portafolio() {
  const onClickBikeBazaar = () => {
    window.open("https://bikebazaar.netlify.app/", "_blank");
  };

  const onClickPenger = () => {
    window.open("https://pengersolutions.netlify.app/", "_blank");
  };

  const onClickVollx = () => {
    window.open("https://vollx.netlify.app/", "_blank");
  };

  const onClickMey = () => {
    window.open("https://meyblaks.netlify.app/", "_blank");
  };

  const onClickChess = () => {
    window.open("https://spontaneous-sable-9e1886.netlify.app/", "_blank");
  };

  const onClickDraw = () => {
    window.open("https://mellow-clafoutis-7975b0.netlify.app", "_blank");
  };

  const onClickVector = () => {
    window.open("http://vectorsoluciones.com.ar/", "_blank");
  };
  const onClickRuiz = () => {
    window.open("https://genesisdeherencia.com/", "_blank");
  };

  const onClickMovie = () => {
    window.open("https://calm-bombolone-99a44c.netlify.app/", "_blank");
  };

  const onClickNigiri = () => {
    window.open("https://realtynigiri.netlify.app/", "_blank");
  };

  return (
    <div className="portafolio" id="Portfolio">
      <div className="tittle-container">
        <span className="tittle-1">Recent Projects</span>
        <span className="tittle-2">Portfolio</span>
      </div>

      <Swiper slidesPerView={1} grabCursor={true} className="portafolio-slider">
        <SwiperSlide>
          <img src={Mey} alt="Web-Site" />
          <button className="button-slider" onClick={onClickMey}>
            View More
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={GenesisdeHerencia} alt="Web-Site" />
          <button className="button-slider" onClick={onClickRuiz}>
            View More
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={BikeBazzar} alt="Web-Site" />
          <button className="button-slider" onClick={onClickBikeBazaar}>
            View More
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={VectorSoluciones} alt="Web-Site" />
          <button className="button-slider" onClick={onClickVector}>
            View More
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Nigiri} alt="Web-Site" />
          <button className="button-slider" onClick={onClickNigiri}>
            View More
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Penger} alt="Web-Site" />
          <button className="button-slider" onClick={onClickPenger}>
            View More
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Vollx} alt="Web-Site" />
          <button className="button-slider" onClick={onClickVollx}>
            View More
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Chess} alt="Web-Site" />
          <button className="button-slider" onClick={onClickChess}>
            View More
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Movie} alt="Web-Site" />
          <button className="button-slider" onClick={onClickMovie}>
            View More
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Draw} alt="Web-Site" />
          <button className="button-slider" onClick={onClickDraw}>
            View More
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portafolio;
