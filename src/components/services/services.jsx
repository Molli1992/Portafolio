import React from "react";
import "./services.css";
import Card from "../card/card";
import Resume from "../../cv/CV-portfolio.pdf";
import { FaLightbulb, FaHeart, FaGlasses } from "react-icons/fa";

function Services() {
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>

        <span style={{ maxWidth: "500px" }}>
          It's all about making sure a product's user interface is as intuitive
          as possible, and that means carefully considering each and every
          visual and interactive element the user might encounter.
        </span>

        <a
          href={Resume}
          download="CV-Felipe-Blaksley.pdf"
          style={{ textDecoration: "none" }}
        >
          <button className="button s-button">Download CV</button>
        </a>
      </div>

      <div className="cards">
        <div>
          <Card
            emoji={<FaHeart />}
            heading={"Desing"}
            detail={"Figma, Bootstrap, Ant-desing, Chakra-ui, Material UI"}
          />
        </div>

        <div>
          <Card
            emoji={<FaGlasses />}
            heading={"Developer"}
            detail={
              "HTML, CSS, Javascript, Next js, React, React Native, Redux, Zustand, Node js, Expresse, Bcript, Nodemailer, Google maps API, Sequielize, Postgress SQL, MySql and More ..."
            }
          />
        </div>

        <div>
          <Card
            emoji={<FaLightbulb />}
            heading={"UI/UX"}
            detail={
              "The user experience covers all aspects of the end user's interaction with the company, its services and products."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
