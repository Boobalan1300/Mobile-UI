import React, { useState } from "react";
import logo_black from "../images/logo-black.png";
import "./style.css";
import "./grid.css";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import left from "../images/arrow-left.png";
import right from "../images/arrow-right.png";

const TestimonalsComponent = () => {
  const datas = [
    {
      img: user1,
      name: "Arun",
      work: "Designer",
      paragraph:
        "Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra.",
    },
    {
      img: user2,
      name: "Joe",
      work: "Developer",
      paragraph:
        "Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.",
    },
    {
      img: user3,
      name: "Hendry",
      work: "Blogger",
      paragraph:
        "Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const user = datas[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + datas.length) % datas.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  return (
    <>
      <div className="">
        <div className="entire-bg">

          <div className="title-testimonal">
            <div className="testimonal-detail">
              <h3 className="main-title-white">Testimonals</h3>
              <p className="main-content-white">
                Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
                viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
                pharetra ante.
              </p>
            </div>
          </div>

          <div className="all-user">
            <img src={left} onClick={handlePrev} className="btn-margin"></img>
            <div className="user-detail">
              <div className="data">
                <img
                  src={user.img}
                  alt={user.name}
                  className="testimonal-img"
                />
                <div className="">
                  <h4 className="name-font-testimonal line-height-name ">{user.name}</h4>
                  <h6 className="name-font line-height-testimonal">{user.work}</h6>
                  <p className="para-margin">{user.paragraph}</p>
                </div>
              </div>
            </div>
            <img src={right} onClick={handleNext} className="btn-margin"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonalsComponent;
