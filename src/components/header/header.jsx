import React from "react";
import "./header.css";
import { Link } from "react-scroll";

function header() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Felipe Blaksley</div>

        <div className="header-responsive-button">
          <Link spy={true} to="Contact" smooth={true}>
            <button className="header-button">Contact</button>
          </Link>
        </div>
      </div>

      <div className="n-rigth">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="header"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>

            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>

            <Link spy={true} to="Experiences" smooth={true}>
              <li>Experience</li>
            </Link>

            <Link spy={true} to="Works" smooth={true}>
              <li>Works</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>

        <Link spy={true} to="Contact" smooth={true}>
          <button className="header-button">Contact</button>
        </Link>
      </div>

      <div className="n-rigth-responsive"></div>
    </div>
  );
}

export default header;
