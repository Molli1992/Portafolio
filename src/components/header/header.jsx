import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

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

                    <Link to="/" className="rutasNav">
                        Inicio
                    </Link>

                    <Link to="/contacto" className="rutasNav">
                        Contacto
                    </Link>

                    <Link to="/perfil" className="rutasNav">
                        Perfil
                    </Link>

                </nav>

            </div>

        </header>

    );

};


export default header;