import React from "react";
import AboutCarousel from './AboutCarousel.js';
import sakura from './assets/imgs/about/sakura.png';



function About() {
  return (
    <div className="about mx-auto">
        <div className="row">
          <div className="col flip-horiz sakura">
            <img className="pos-bottom" src={sakura} width="150%" alt="sakura flower"/>
          </div>
          <div className="col-8 mx-auto about-c">
            <AboutCarousel/>
          </div>
          <div className="col sakura">
            <img className="pos-bottom float-right" src={sakura} width="150%" alt="sakura flower"/>
          </div>

          <div className="row justify-content-center">
            <a href="https://www.instagram.com/radix_lmu/?hl=en"><i className="fab fa-instagram m-3 fa-3x text-pink"></i></a>
            <a href="https://www.youtube.com/channel/UC-3rodlCq18-FeiDvbO438A"><i className="fab fa-youtube m-3 fa-3x text-pink"></i></a>
            <a href="https://lmu.campuslabs.com/engage/organization/radix-dance-team"><h3 className="mx-3 mt-4 text-pink font-weight-bold">LEO</h3></a>

          </div>
        </div>
    </div>
  );
}

export default About;
