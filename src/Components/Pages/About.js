

import React from "react";

import "./style.css";
import "./grid.css";
import iphone from "../images/iphone-screen-with-shadow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const AboutComponent = ({ id }) => {
  return (
    <>
       <section id={id}>
       <div className="about-component min-width-mb ">
        <div className="margin-container-about">
          <div className="container">
            <div className="col-lg-12 col-12">
              <div className="row-title row-margin">
                <h1 className="main-title">ABOUT</h1>
                <p className="main-content">
                  Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
                  viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
                  pharetra ante.
                </p>
              </div>
            </div>
          </div>

          <div className="container about-icons-lg-m">
            <div className=" box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
              <FontAwesomeIcon icon={faLifeRing} className="about-icon" />
              <div>
                <h4 className="main-sub-title">Support</h4>
                <p className="main-sub-content">
                  Phasellus lobortis justo a magna facilisis, in commodo tellus
                  rutrum. Sed vitae condimentum nulla.
                </p>
              </div>
            </div>
            <div className="box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
              <FontAwesomeIcon icon={faMobile} className="about-icon" />
              <div>
                <h4 className="main-sub-title">Cross Platform</h4>
                <p className="main-sub-content">
                  Phasellus lobortis justo a magna facilisis, in commodo tellus
                  rutrum. Sed vitae condimentum nulla.
                </p>
              </div>
            </div>
            <div className="box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
              <FontAwesomeIcon icon={faBolt} className="about-icon" />
              <div>
                <h4 className="main-sub-title">Fast</h4>
                <p className="main-sub-content">
                  Phasellus lobortis justo a magna facilisis, in commodo tellus
                  rutrum. Sed vitae condimentum nulla.
                </p>
              </div>
            </div>

            <div className="box  col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
              <button className="box-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-md-none">

      </div>
       </section>
    </>
  );
};
export default AboutComponent;
