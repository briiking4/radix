import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {useState } from 'react';
import carousel03 from "./assets/imgs/carousel/skate.mp4";
import carousel01 from "./assets/imgs/carousel/forthenight.mov";




  function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const playAudio = async () => {
      setCount(count + 1);

        const audioEl = document.getElementsByClassName("audio-element")[0];
        var button = document.getElementById('audio-button');

        if (count % 2 == 0){
          audioEl.muted = false;
          button.classList.toggle("fa-volume-up");
        }else{
          button.classList.toggle("fa-volume-mute");
          audioEl.muted = true;

        }


  }


  return (
      <Carousel id="HomeCarousel" className="mx-auto carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-item" interval={20000}>
          <video class="video-fluid w-100 carousel-img audio-element" autoplay="autoplay" loop muted>
            <source src={carousel01} type="video/mp4" />
          </video>
        <Carousel.Caption className="carousel-caption text-left d-sm-block d-md-block">
          <button className="float-right btn" onClick={playAudio}>
              <i id="audio-button" className="fas text-white fa-3x fa-volume-mute"></i>
          </button>
        </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-img"
            src='https://drive.google.com/uc?export=view&id=135FM4wmQW_-dKFFZ3wc0UI7QzPDUeasx'
            alt="2nd slide"
          />

        </Carousel.Item>

        <Carousel.Item className="carousel-item" interval={20000}>
            <video class="video-fluid w-100 carousel-img audio-element" autoplay="autoplay" loop muted>
              <source src={carousel03} type="video/mp4" />
            </video>
          <Carousel.Caption className="carousel-caption text-left d-sm-block d-md-block">
            <button className="float-right btn" onClick={playAudio}>
                <i id="audio-button" className="fas text-white fa-3x fa-volume-mute"></i>
            </button>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
  );
}

export default HomeCarousel;
