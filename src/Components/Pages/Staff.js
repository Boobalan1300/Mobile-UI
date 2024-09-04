import React from "react";

import "./style.css";
import "./grid.css";

import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";


const StaffComponent = () => {
  return (
    <>
      <div className="margin-user-lg-md ">
        <div className="container">
          <div className="col-lg-12 col-12">
            <div className="row-title ">
              <h1 className="main-title">Our Team</h1>
              <p className="main-content">
                Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
                viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
                pharetra ante.
              </p>
            </div>
          </div>
          

          <div className=" box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
            <img src={user1} className="user-img" />
            <div>
              <h4 className="main-sub-title line-height">Nitu Singh</h4>
              <p className="main-sub-content">Marketing Specialist</p>
            </div>
          </div>
          <div className="box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
          <img src={user2} className=" user-img" />
            <div>
              <h4 className="main-sub-title line-height">Yogesh Singh</h4>
              <p className="main-sub-content">CEO & Founder</p>            </div>
          </div>
          <div className="box col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
          <img src={user3} className=" user-img" />
            <div>
              <h4 className="main-sub-title line-height">Nisha Sharma</h4>
              <p className="main-sub-content"> Web Developer</p>            </div>
          </div>

          <div className="box  col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            <button className="box-button">Learn More</button>
          </div>
        </div>
      </div>

      
    </>
  );
};
export default StaffComponent;
