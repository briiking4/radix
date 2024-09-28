import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './about.css';
import {useState } from 'react';


function AboutCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel className="mx-auto carousel" id="aboutCarousel" indicators={false} activeIndex={index} onSelect={handleSelect} nextLabel="" prevLabel="">
        <Carousel.Item className="carousel-item rounded">
          <div className="d-flex justify-content-center w-100 h-100">
            <img
              className="align-middle carousel-img"
              src='https://storage.cloud.google.com/radix-9544c.appspot.com/assets/front-page/Radix%20pose-min%20(1).JPG'
              alt="First slide"
              loading="lazy"
            />
          </div>
          <Carousel.Caption className="carousel-caption caption-top d-sm-block d-md-block">
              <h1 className="font-weight-bold text-resp-5 text-pink">RADIX DANCE CREW</h1>
              <p className="font-italic text-resp-3 ">Know Your Roots</p>
              <p className="mt-4 font-weight-bold"> Radix Dance Crew strives to be a community of diverse dancers who support one another in and outside of the dance studio.
              Radix’s style focuses on movement, choreographic invention, free-flowing creativity, and influences of social and cultural dance. Radix recognizes each member as an individual who brings unique experiences and knowledge to the collective crew.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item rounded">
        <div className="d-flex justify-content-center w-100 h-100">
            <img
              className="align-middle"
              src='https://storage.cloud.google.com/radix-9544c.appspot.com/assets/front-page/52598860_800820220269107_7302242524087713792_n-min.jpg'
              alt="2nd slide"
              loading="lazy"
            />
          </div>

        </Carousel.Item>

        <Carousel.Item className="carousel-item rounded">
          <div className="d-flex justify-content-center w-100 h-100">
            <img
              className="align-middle"
              src='https://storage.cloud.google.com/radix-9544c.appspot.com/assets/front-page/radix-purple.jpg'
              alt="2nd slide"
              loading="lazy"
            />
          </div>
        </Carousel.Item>
      </Carousel>


  );
}

export default AboutCarousel;
