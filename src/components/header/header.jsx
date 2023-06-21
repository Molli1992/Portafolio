import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function header() {


    return (

        <div className="n-wrapper">

            <div className="n-left">
                <div className="n-name">Felipe</div>
                <span>toggle</span>
            </div>

            <div className="n-rigth">

                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>

                <button className="button">Contact Us</button>

            </div>

        </div>

    );

};


export default header;