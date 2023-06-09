import React from "react";
import "./portafolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Henry from "../../imagenes/henrystore-captura.png";
import Penger from "../../imagenes/pengersolutions-captura.png";
import Hussel from "../../imagenes/husselkay-captura.png";
import Mey from "../../imagenes/meyblaks-captura.png";



function Portafolio() {

    const onClickHenry = () => {
        window.open("https://henrygamestores.vercel.app/", "_blank");
    }

    const onClickPenger = () => {
        window.open("https://pengersolutions.com/", "_blank");
    }

    const onClickHussel = () => {
        window.open("https://husselkay.com/", "_blank");
    }

    const onClickMey = () => {
        window.open("https://nimble-rugelach-e7258d.netlify.app/", "_blank");
    }

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
            >

                <SwiperSlide>
                    <img src={Henry} alt="Web-Site" />
                    <button className="button-slider" onClick={onClickHenry}>View More</button>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Hussel} alt="Web-Site" />
                    <button className="button-slider" onClick={onClickHussel}>View More</button>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Mey} alt="Web-Site" />
                    <button className="button-slider" onClick={onClickMey}>View More</button>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Penger} alt="Web-Site" />
                    <button className="button-slider" onClick={onClickPenger}>View More</button>
                </SwiperSlide>

            </Swiper>

        </div>

    );

};

export default Portafolio;