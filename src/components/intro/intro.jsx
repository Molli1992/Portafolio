import React from "react";
import "./intro.css";
import Vectorial from "../../logo/vector-removebg-preview.png";
import Photo from "../../logo/joven-apuesto-feliz-pulgares-arriba-firmar-casual-pleno-crecimiento-aislado-blanco-removebg-preview.png";


function Intro() {


    return (

        <div className="intro">

            <div className="i-left">

                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Felipe Blaksley</span>
                    <span>
                        Frontend Developer with high
                        level of experiences in web desinging
                        and development, producting the
                        Quality work
                    </span>
                </div>

                <button className="button i-button">Hire me</button>

                <div className="i-icons">
                    <a href="https://github.com/Molli1992" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/felipe-blaksley-iraola-141b32236/" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a href="https://www.instagram.com/felipeblaksley/" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </div>

            </div>

            <div className="i-right">

                <img src={Vectorial} alt="Vectorial" className="vectorial" />
                <img src={Photo} alt="Profile-Photo" className="i-photo-profile" />

            </div>

        </div>

    );

};

export default Intro;