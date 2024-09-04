import React from "react";

import "./style.css";
import "./grid.css";
import iphone from "../images/iphone-screen-with-shadow.png";
import playstore from "../images/playstore.png";
import appstore from "../images/appstore.png";
import applight from "../images/applight-wave.svg";

const QuesAnsComponent = () => {
  return (
    <>
      <div className="Ques-ans-container">
        <div className="Ques-ans-details">
          <h3 className="main-title">Frequently Asked Questions</h3>
          <p className="main-content">Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
        </div>
      </div>

      <div className="ques-ans-margin-lg">
      <div className="container ques-ans-margin">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
          <h4 className="question-font">Nam tellus felis, dignissim quis dui ?</h4>
          <p className="answer-font">
            Suspendisse fermentum placerat enim, at pellentesque augue. Nullam
            elit est, ultricies et tellus ac, euismod placerat orci. Donec
            commodo.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
          <h4 className="question-font">Mauris scelerisque, dui non faucibus vulputate ?</h4>
          <p className="answer-font">
          Sed tempus in neque ac rhoncus. Phasellus vehicula, erat tempor malesuada egestas, mauris tellus malesuada erat, at vestibulum nulla ex et lectus. Nullam elit est, ultricies et tellus ac, euismod placerat orci.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
          <h4 className="question-font">Nullam elit est, ultricies et tellus ac ?</h4>
          <p className="answer-font">
          Ut vestibulum euismod aliquet. Quisque nec malesuada nibh. Vivamus euismod nunc eu leo faucibus, vel elementum justo posuere. In sed varius nisi. Curabitur id porta ipsum, et vestibulum dui.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
          <h4 className="question-font">Suspendisse fermentum placerat enim, at pellentesque augue elit est ?</h4>
          <p className="answer-font">
          Vivamus euismod nunc eu leo faucibus, vel elementum justo posuere. In sed varius nisi.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
          <h4 className="question-font">Ut vestibulum euismod aliquet. Quisque nec malesuada nibh ?</h4>
          <p className="answer-font">
          Suspendisse fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo dapibus congue.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
          <h4 className="question-font">Donec commodo dapibus congue ?</h4>
          <p className="answer-font">
          Nullam elit est, ultricies et tellus ac, euismod placerat orci fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo dapibus congue.
          </p>
        </div>
       
      </div>
      </div>

    
    </>
  );
};
export default QuesAnsComponent;
