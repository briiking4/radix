import React from "react";
import AboutCarousel from './AboutCarousel.js';
import sakura from './assets/imgs/about/sakura.png';



function About() {
  return (
    <div className="about">
        <div className="row">
          <div className="col-2 overflow-hidden flip-horiz">
            <img className="pos-bottom" src={sakura} width="150%" alt="sakura flower"/>
          </div>
          <div className="col-8 mx-auto">
            <AboutCarousel/>
          </div>
          <div className="col-2 overflow-hidden">
            <img className="pos-bottom float-right" src={sakura} width="150%" alt="sakura flower"/>
          </div>
        </div>
    </div>
  );
}

export default About;
