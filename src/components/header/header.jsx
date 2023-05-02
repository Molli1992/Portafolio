import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../logo/WhatsApp Image 2023-05-01 at 12.14.19.jpeg";

function header() {


    return (

        <header className="header">

            <div className="container">

                <div className="logo">
                    <a href="https://github.com/Molli1992" target="_blank" rel="noreferrer"><ion-icon name="logo-github" size="large"></ion-icon></a>
                </div>

                <div className="boton">
                    <label for="btn-menu">Menu</label>
                </div>

                <input type="checkbox" id="btn-menu"></input>

                <nav className="menu">

                    <Link to="/services" className="rutasNav">
                        Inicio
                    </Link>

                    <Link to="/contact" className="rutasNav">
                        Contacto
                    </Link>

                    <Link to="/" className="rutasNav">
                        Perfil
                    </Link>

                </nav>

            </div>

        </header>

    );

};


export default header;