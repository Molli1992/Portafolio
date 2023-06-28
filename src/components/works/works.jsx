import React from "react";
import "./works.css";
import logoHenry from "../../imagenes/henry-logo-removebg-preview.png";
import logoPenger from "../../imagenes/Logo-penger-solutions.png";
import logoHussel from "../../imagenes/Logos-Hussel-Kay.png";
import logoMey from "../../imagenes/logo meyblaks-01.png";
import logoGithub from "../../imagenes/logo-github-removebg-preview.png";



function Works() {



    return (

        <div className="works">

            <div className="awesome">

                <span>Works for All these</span>
                <span>Brands & Clients</span>

                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    <br></br>
                    Dolorem modi ut sit quisquam iure nihil, corrupti animi eos optio
                    <br></br>
                    Dolorem modi ut sit quisquam iure nihil, corrupti animi eos optio
                    <br></br>
                    Dolorem modi ut sit quisquam iure nihil, corrupti animi eos optio
                </span>

                <button className="button s-button">Hire me</button>

            </div>

            <div className="w-rigth">

                <div className="w-responsive">

                    <div className="w-secCircle-r">
                        <a href="https://henrygamestores.vercel.app/" target="_blank" rel="noreferrer">
                            <img src={logoHenry} alt="Soy Henry" />
                        </a>
                    </div>

                    <div className="w-secCircle-r">
                        <a href="https://husselkay.com/" target="_blank" rel="noreferrer">
                            <img src={logoHussel} alt="Hussel Kay" />
                        </a>
                    </div>

                    <div className="w-secCircle-r">
                        <a href="https://github.com/Molli1992" target="_blank" rel="noreferrer">
                            <img src={logoGithub} alt="Penger Solutions" />
                        </a>
                    </div>

                    <div className="w-secCircle-r">
                        <a href="https://nimble-rugelach-e7258d.netlify.app/" target="_blank" rel="noreferrer">
                            <img src={logoMey} alt="MeyBlaks" />
                        </a>
                    </div>

                    <div className="w-secCircle-r">
                        <a href="https://pengersolutions.com/" target="_blank" rel="noreferrer">
                            <img src={logoPenger} alt="Github" />
                        </a>
                    </div>

                </div>

                <div className="w-mainCircle">

                    <div className="w-secCircle">
                        <a href="https://henrygamestores.vercel.app/" target="_blank" rel="noreferrer">
                            <img src={logoHenry} alt="Soy Henry" />
                        </a>
                    </div>

                    <div className="w-secCircle">
                        <a href="https://husselkay.com/" target="_blank" rel="noreferrer">
                            <img src={logoHussel} alt="Hussel Kay" />
                        </a>
                    </div>

                    <div className="w-secCircle">
                        <a href="https://github.com/Molli1992" target="_blank" rel="noreferrer">
                            <img src={logoGithub} alt="Penger Solutions" />
                        </a>
                    </div>

                    <div className="w-secCircle">
                        <a href="https://nimble-rugelach-e7258d.netlify.app/" target="_blank" rel="noreferrer">
                            <img src={logoMey} alt="MeyBlaks" />
                        </a>
                    </div>

                    <div className="w-secCircle">
                        <a href="https://pengersolutions.com/" target="_blank" rel="noreferrer">
                            <img src={logoPenger} alt="Github" />
                        </a>
                    </div>

                </div>

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>

        </div>

    );

};

export default Works;