import React from "react";

import "./style.css";
import "./grid.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";

import playstore from "../images/playstore.png";
import appstore from "../images/appstore.png";

const FooterComponent = () => {
  return (
    <>
      <div>
        <div className="footer-bg">
          <div className="footer-content">
            <h4 className="main-title-white">Download Our App</h4>
            <p className="main-content-white">
              Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
              viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
              pharetra ante.
            </p>

            <div className="footer-img">
              <img src={playstore}></img>
              <img src={appstore}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterComponent;
