import React from "react";
import "./intro.css";
import Vectorial from "../../logo/vector-removebg-preview.png";
import Photo from "../../imagenes/caricatura-removebg-preview.png";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Felipe Blaksley</span>
          <span>
            Hello, I am a fullstack developer with 3 years of experience,
            passionate about the logical and creative thinking involved in
            developing a website and a mobile application.
          </span>
        </div>

        <button className="button i-button">Hire me</button>

        <div className="i-icons">
          <a
            href="https://github.com/Molli1992"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-blaksley-iraola-141b32236/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/felipeblaksley/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5491124586710"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vectorial} alt="Vectorial" className="vectorial" />
        <img src={Photo} alt="Profile" className="i-photo-profile" />
      </div>
    </div>
  );
}

export default Intro;
