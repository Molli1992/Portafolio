import React from "react";
import "./portafolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
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
import Hussel from "../../imagenes/husselkay-captura.png";

function Portafolio() {
  const dataWebsites = [
    { img: Mey, url: "https://meyblaks.netlify.app/" },
    { img: GenesisdeHerencia, url: "https://genesisdeherencia.netlify.app/" },
    { img: BikeBazzar, url: "https://bikebazaar.netlify.app/" },
    { img: VectorSoluciones, url: "https://vectorsoluciones.netlify.app/" },
    { img: Nigiri, url: "https://realtynigiri.netlify.app/" },
    { img: Penger, url: "https://pengersolutions.netlify.app/" },
    { img: Vollx, url: "https://vollx.netlify.app/" },
    { img: Chess, url: "https://spontaneous-sable-9e1886.netlify.app/" },
    { img: Movie, url: "https://calm-bombolone-99a44c.netlify.app/" },
    { img: Draw, url: "https://mellow-clafoutis-7975b0.netlify.app" },
    { img: Hussel, url: "https://husselkay.netlify.app" },
  ];

  const onClickOpenUrl = (url) => {
    window.open(url, "_blank");
  };

  const swiperStyles = {
    "--swiper-pagination-color": "#fca61f",
    "--swiper-pagination-bullet-size": "10px",
  };

  return (
    <div className="portafolio" id="Portfolio">
      <div className="tittle-container">
        <span className="tittle-1">Recent Projects</span>
        <span className="tittle-2">Portfolio</span>
      </div>

      <Swiper
        slidesPerView={1}
        grabCursor={true}
        className="portafolio-slider"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        style={swiperStyles}
      >
        {dataWebsites &&
          dataWebsites.map((website) => {
            return (
              <SwiperSlide
                onClick={() => {
                  onClickOpenUrl(website.url);
                }}
              >
                <img src={website.img} alt="Web-Site" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Portafolio;
