import React from "react";
import "./services.css";
import Card from "../card/card";
import Resume from "../../cv/CV-portfolio.pdf";



function Services() {


    return (

        <div className="services" id="Services">

            <div className="awesome">

                <span>My Awesome</span>
                <span>Services</span>

                <span>
                    It's all about making sure a product's user interface is as intuitive as possible,
                    <br></br>
                    and that means carefully considering each and every visual and
                    <br></br>
                    interactive element the user might encounter.
                </span>

                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>

            </div>

            <div className="cards">

                <div>
                    <Card
                        emoji={<ion-icon name="heart-half-outline" size="large"></ion-icon>}
                        heading={"Desing"}
                        detail={"Figma, Bootstrap, Ant-desing, Chakra-ui, Wordpress"}
                    />
                </div>

                <div>
                    <Card
                        emoji={<ion-icon name="glasses-outline" size="large"></ion-icon>}
                        heading={"Developer"}
                        detail={"HTML, CSS, Javascript, Next js, React, Redux, Node js, Expresse, Bcript, Nodemailer, Google maps API, Sequielize, Postgress SQL"}
                    />
                </div>

                <div>
                    <Card
                        emoji={<ion-icon name="bulb-outline" size="large"></ion-icon>}
                        heading={"UI/UX"}
                        detail={"The user experience covers all aspects of the end user's interaction with the company, its services and products."}
                    />
                </div>

            </div>

        </div>

    );

};

export default Services;