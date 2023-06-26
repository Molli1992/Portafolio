import React from "react";
import "./services.css";
import Card from "../card/card";
import Resume from "../../cv/CV-Felipe-Blaksley-Mayo-2023.pdf";



function Services() {


    return (

        <div className="services">

            <div className="awesome">

                <span>My Awesome</span>
                <span>Services</span>

                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    <br></br>
                    Dolorem modi ut sit quisquam iure nihil, corrupti animi eos optio
                </span>

                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>

            </div>

            <div className="cards">

                <div className="position-card-1">
                    <Card
                        emoji={<ion-icon name="heart-half-outline" size="large"></ion-icon>}
                        heading={"Desing"}
                        detail={"Figma, Bootstrap, Ant-desing, Chakra-ui, Wordpress"}
                    />
                </div>

                <div className="position-card-2">
                    <Card
                        emoji={<ion-icon name="glasses-outline" size="large"></ion-icon>}
                        heading={"Developer"}
                        detail={"HTML, Css, Javascript, React, Redux, Node js, Expresse, Sequielize, Postgress SQL"}
                    />
                </div>

                <div className="position-card-3">
                    <Card
                        emoji={<ion-icon name="bulb-outline" size="large"></ion-icon>}
                        heading={"UI/UX"}
                        detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quam soluta perferendis"}
                    />
                </div>

            </div>

        </div>

    );

};

export default Services;