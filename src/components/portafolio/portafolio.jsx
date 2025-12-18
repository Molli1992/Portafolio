import React from "react";
import "./portafolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import BikeBazzar from "../../imagenes/Captura de pantalla bike-bazaar.jpg";
import Penger from "../../imagenes/pengersolutions-captura.png";
import Vollx from "../../imagenes/Captura de pantalla vollx.png";
import Mey from "../../imagenes/meyblaks-captura.png";
import VectorSoluciones from "../../imagenes/img-vector-soluciones.png";
import GenesisdeHerencia from "../../imagenes/img-genesis-de-herencia.png";
import Nigiri from "../../imagenes/nigiri-captura.png";
import Hussel from "../../imagenes/husselkay-captura.png";
import Profile from "../../imagenes/profile-website-img.png";
import Crabog from "../../imagenes/crabog-website.jpg";
import Casamiento from "../../imagenes/Captura de pantalla casamiento.jpg";
// import Contenidos from "../../imagenes/contenidos-img.png";
import EastEnglish from "../../imagenes/easy-english.png";

function Portafolio() {
  const dataWebsites = [
    { img: Crabog, url: "https://crabog.netlify.app/" },
    { img: GenesisdeHerencia, url: "https://genesisdeherencia.netlify.app/" },
    { img: Mey, url: "https://meyblaks.netlify.app/" },
    //{ img: Contenidos, url: "https://contenidos.netlify.app/" },
    { img: EastEnglish, url: "https://easyenglishonline.netlify.app/" },
    { img: Hussel, url: "https://husselkay.netlify.app" },
    { img: VectorSoluciones, url: "https://vectorsoluciones.netlify.app/" },
    { img: Penger, url: "https://pengersolutions.netlify.app/" },
    { img: BikeBazzar, url: "https://bikebazaar.netlify.app/" },
    { img: Nigiri, url: "https://realtynigiri.netlify.app/" },
    { img: Vollx, url: "https://vollx.netlify.app/" },
    { img: Profile, url: "https://benevolent-pony.netlify.app/" },
    { img: Casamiento, url: "https://wedgiftbank.netlify.app/" },
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
