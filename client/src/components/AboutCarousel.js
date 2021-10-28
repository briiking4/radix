import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './about.css';
import {useState } from 'react';
import carousel01 from "./assets/imgs/about/about-bg.png";


function AboutCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel className="mx-auto carousel" id="aboutCarousel" indicators={false} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-item rounded">
          <img
            className="d-block w-100 carousel-img"
            src='https://drive.google.com/uc?export=view&id=1AlB-LAcu8iJNqy2F1VSbqc6ExaELv3Sr'
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption caption-top d-sm-block d-md-block">
              <h1 class="font-weight-bold text-resp-4 text-pink">RADIX DANCE CREW</h1>
              <h4 className="font-italic">Know Your Roots</h4>
              <p class="mt-5 font-weight-bold"> Radix Dance Crew strives to be a community of diverse dancers who support one another in and outside of the dance studio.
              Radix’s style focuses on movement, choreographic invention, free-flowing creativity, and influences of social and cultural dance. Radix recognizes each member as an individual who brings unique experiences and knowledge to the collective crew. Radix values the education of cultural history, family, and community. Best Dance Crew Winner 2018, 2019, 2020.</p>
              <div class="mt-5 row justify-content-center">
                <a href="https://www.instagram.com/radix_lmu/?hl=en"><i class="fab fa-instagram m-3 fa-3x text-white"></i></a>
                <a href="https://www.youtube.com/channel/UC-3rodlCq18-FeiDvbO438A"><i class="fab fa-youtube m-3 fa-3x text-white"></i></a>
                <a href="https://lmu.campuslabs.com/engage/organization/radix-dance-team"><h3 class="mx-3 mt-4 text-white font-weight-bold">LEO</h3></a>

              </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item rounded">
          <img
            className="d-block w-100"
            src='https://drive.google.com/uc?export=view&id=1YY3-ZGKucp29LrXWbSEi3uxsKa8A8llj'
            alt="2nd slide"
          />

        </Carousel.Item>

        <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src='https://drive.google.com/uc?export=view&id=1HiO97JqU6K7m0gwp6jNy2MKRHFUSSkHf'
          alt="2nd slide"
        />
        </Carousel.Item>
      </Carousel>

  );
}

export default AboutCarousel;
