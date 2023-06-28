import React from "react";
import "./header.css";

function header() {


    return (

        <div className="n-wrapper">

            <div className="n-left">
                <div className="n-name">Felipe Blaksley</div>
            </div>

            <div className="n-rigth">

                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Profile</li>
                    </ul>
                </div>

                <button className="button">Contact</button>

            </div>

        </div>

    );

};


export default header;