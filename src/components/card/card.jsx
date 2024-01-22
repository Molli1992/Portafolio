import React from "react";
import "./card.css";


function Card({ emoji, heading, detail }) {



    return (

        <div className="card">

            <div className="icon-card">{emoji}</div>
            <span>{heading}</span>
            <span>{detail}</span>

        </div>

    );

};

export default Card;