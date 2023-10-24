import React from "react";
import "./portafolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Henry from "../../imagenes/henrystore-captura.png";
import Penger from "../../imagenes/pengersolutions-captura.png";
import Hussel from "../../imagenes/husselkay-captura.png";
import Mey from "../../imagenes/meyblaks-captura.png";
import Chess from "../../imagenes/Captura de pantalla chess app.png";
<<<<<<< HEAD
import Draw from "../../imagenes/draw-app.png";
import VectorSoluciones from "../../imagenes/img-vector-soluciones.png";
import GenesisdeHerencia from "../../imagenes/img-genesis-de-herencia.png";
=======
import Draw from "../../imagenes/draw-app.png"
import Movie from "../../imagenes/Captura de pantalla movie app.png";


>>>>>>> 5b7222e4f9706c8a1d3716c2ac0fe293b6e904ab

function Portafolio() {
  const onClickHenry = () => {
    window.open("https://henrygamestores.vercel.app/", "_blank");
  };

  const onClickPenger = () => {
    window.open("https://pengersolutions.com/", "_blank");
  };

  const onClickHussel = () => {
    window.open("https://husselkay.com/", "_blank");
  };

  const onClickMey = () => {
    window.open("https://nimble-rugelach-e7258d.netlify.app/", "_blank");
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

<<<<<<< HEAD
  const onClickRuiz = () => {
    window.open("https://genesisdeherencia.com/", "_blank");
  };
=======
    const onClickMovie = () => {
        window.open("https://calm-bombolone-99a44c.netlify.app/", "_blank");
    }

    return (
>>>>>>> 5b7222e4f9706c8a1d3716c2ac0fe293b6e904ab

  return (
    <div className="portafolio" id="Portfolio">
      <div className="tittle-container">
        <span className="tittle-1">Recent Projects</span>
        <span className="tittle-2">Portfolio</span>
      </div>

      <Swiper slidesPerView={1} grabCursor={true} className="portafolio-slider">
        <SwiperSlide>
          <img src={Henry} alt="Web-Site" />
          <button className="button-slider" onClick={onClickHenry}>
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
          <img src={GenesisdeHerencia} alt="Web-Site" />
          <button className="button-slider" onClick={onClickRuiz}>
            View More
          </button>
        </SwiperSlide>

<<<<<<< HEAD
        <SwiperSlide>
          <img src={Mey} alt="Web-Site" />
          <button className="button-slider" onClick={onClickMey}>
            View More
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Penger} alt="Web-Site" />
          <button className="button-slider" onClick={onClickPenger}>
            View More
          </button>
        </SwiperSlide>
=======
                <SwiperSlide>
                    <img src={Mey} alt="Web-Site" />
                    <button className="button-slider" onClick={onClickMey}>View More</button>
                </SwiperSlide>
>>>>>>> 5b7222e4f9706c8a1d3716c2ac0fe293b6e904ab

        <SwiperSlide>
          <img src={Chess} alt="Web-Site" />
          <button className="button-slider" onClick={onClickChess}>
            View More
          </button>
        </SwiperSlide>

<<<<<<< HEAD
        <SwiperSlide>
          <img src={Hussel} alt="Web-Site" />
          <button className="button-slider" onClick={onClickHussel}>
            View More
          </button>
        </SwiperSlide>
=======
                <SwiperSlide>
                    <img src={Movie} alt="Web-Site" />
                    <button className="button-slider" onClick={onClickMovie}>View More</button>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Chess} alt="Web-Site" />
                    <button className="button-slider" onClick={onClickChess}>View More</button>
                </SwiperSlide>
>>>>>>> 5b7222e4f9706c8a1d3716c2ac0fe293b6e904ab

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

<<<<<<< HEAD
export default Portafolio;
=======
                <SwiperSlide>
                    <img src={Hussel} alt="Web-Site" />
                    <button className="button-slider" onClick={onClickHussel}>View More</button>
                </SwiperSlide>

            </Swiper>

        </div>

    );

};

export default Portafolio;
>>>>>>> 5b7222e4f9706c8a1d3716c2ac0fe293b6e904ab
