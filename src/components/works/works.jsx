import React from "react";
import "./works.css";
import logoHenry from "../../imagenes/henry-logo-removebg-preview.png";
import logoJodify from "../../imagenes/jodify-logo.png";
import logoBoatmate from "../../imagenes/logo-boatmate.png";
import logoMey from "../../imagenes/logo meyblaks-01.png";
import logoGithub from "../../imagenes/logo-github-removebg-preview.png";

function Works() {
  return (
    <div className="works" id="Works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>

        <span>
          Logical thinking and problem solving are two key skills that are
          <br></br>
          developed by learning to code. The process of writing code requires
          <br></br>
          thinking in logical terms and how to make a solution work efficiently.
          <br></br>
        </span>

        <button className="button s-button">Hire me</button>
      </div>

      <div className="w-rigth">
        <div className="w-responsive">
          <div className="w-secCircle-r">
            <a
              href="https://bikebazaar.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoHenry} alt="Soy Henry" />
            </a>
          </div>

          <div className="w-secCircle-r">
            <a href="https://boatmate.com/" target="_blank" rel="noreferrer">
              <img src={logoBoatmate} alt="Hussel Kay" />
            </a>
          </div>

          <div className="w-secCircle-r">
            <a
              href="https://github.com/Molli1992"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoGithub} alt="Penger Solutions" />
            </a>
          </div>

          <div className="w-secCircle-r">
            <a
              href="https://meyblaks.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoMey} alt="MeyBlaks" />
            </a>
          </div>

          <div className="w-secCircle-r">
            <a
              href="https://www.jodify.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoJodify} alt="Github" />
            </a>
          </div>
        </div>

        <div className="w-mainCircle">
          <div className="w-secCircle">
            <a
              href="https://bikebazaar.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoHenry} alt="Soy Henry" />
            </a>
          </div>

          <div className="w-secCircle">
            <a href="https://boatmate.com/" target="_blank" rel="noreferrer">
              <img src={logoBoatmate} alt="Hussel Kay" />
            </a>
          </div>

          <div className="w-secCircle">
            <a
              href="https://github.com/Molli1992"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoGithub} alt="Penger Solutions" />
            </a>
          </div>

          <div className="w-secCircle">
            <a
              href="https://meyblaks.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoMey} alt="MeyBlaks" />
            </a>
          </div>

          <div className="w-secCircle">
            <a
              href="https://www.jodify.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoJodify} alt="Github" />
            </a>
          </div>
        </div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
