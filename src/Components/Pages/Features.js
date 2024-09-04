import React, { useEffect } from "react";
import "./style.css";
import "./grid.css";
import iphone from "../images/iphone-screen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBatteryFull,
  faWifi,
  faDollarSign,
  faCheckDouble,
  faHdd,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesComponent = ({id}) => {
  return (
    <>
      <section id={id}>
      <div className="features-component margin-features-lg-md margin-features-sm">
        <div className="align-items-center container">
          <div className="col-lg-12 col-12">
            <div className="row-title row-margin">
              <h1 className="main-title">Features</h1>
              <p className="main-content">
                Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
                viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
                pharetra ante.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4  col-sm-12 col-12">
            <div className="d-flex flex-1">
              <div className="box  ">
                <FontAwesomeIcon icon={faBolt} className=" feature-icon" />
                <div className="">
                  <h4 className="name-font">Fast Processing</h4>
                  <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididugnt ut labore
                  </p>
                </div>
              </div>
              <div className="box  flex-1">
                {" "}
                <FontAwesomeIcon
                  icon={faBatteryFull}
                  className=" feature-icon"
                />
                <div>
                  <h4 className="name-font">Low Power Consuming</h4>
                  <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididugnt ut labore
                  </p>
                </div>
              </div>
              <div className="box">
                {" "}
                <FontAwesomeIcon icon={faWifi} className=" feature-icon" />
                <div>
                  <h4 className="name-font">Wifi Compatibility</h4>
                  <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididugnt ut labore
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="box feature-image">
              <img src={iphone}></img>
            </div>
          </div>

          <div className="col-lg-4 col-md-4  col-sm-12 col-12">
            <div className="d-flex flex-2">
              <div className="box">
                {" "}
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className=" feature-icon"
                />
                <div>
                  <h4 className="name-font">Regular Updates</h4>
                  <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididugnt ut labore
                  </p>
                </div>
              </div>

              <div className="box">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className=" feature-icon"
                />
                <div>
                  <h4 className="name-font">Save Money</h4>
                  <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididugnt ut labore
                  </p>
                </div>
              </div>

              <div className="box">
                <FontAwesomeIcon icon={faHdd} className=" feature-icon" />
                <div>
                  <h4 className="name-font">Unlimited Storage</h4>
                  <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididugnt ut labore
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "130px" }}></div>
        </div>
      </div>
      </section>
    </>
  );
};

export default FeaturesComponent;
