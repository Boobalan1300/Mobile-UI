import React from "react";

import "./style.css";
import "./grid.css";
import iphone from "../images/iphone-screen-with-shadow.png";
import playstore from "../images/playstore.png";
import appstore from "../images/appstore.png";
import applight from "../images/applight-wave.svg";

const HeaderComponent = () => {
  return (
    <>
      <div className="">
        <div className="header-bg make-absolute">
          <div className="container margin-container">
            <div className=" header-left col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
              <div className="box-left">
                <div>
                  <h3 className="title-Poppins">Best App Website Template</h3>
                  <h6 className="title-para">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </h6>
                </div>
                <div>
                  <p className="title-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur hendrerit neque massa, sit amet tristique ante
                    porta ut. In sodales et justo vel vulputate. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas.
                  </p>
                </div>
                <div className="left-img">
                  <img src={playstore}></img> <img src={appstore}></img>
                </div>
              </div>
            </div>
            <div className="header-right col-lg-6  col-md-6  col-sm-6 col-xs-12 col-12">
              <div className=" box">
                <img src={iphone} alt="iPhone" className="img-fluid" />
              </div>
              <img src={applight} className="applight-absolute"></img>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div style={{marginBottom:"100px"}}>

            </div> */}
    </>
  );
};
export default HeaderComponent;
