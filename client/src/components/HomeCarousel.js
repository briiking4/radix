import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {useState } from 'react';
import YouTube from 'react-youtube';




  function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);


  const videoRef1 = React.createRef();

  const videoRef2 = React.createRef();


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  const opts = [{
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        loop: 1,
        playlist: "9WaNGRnS6aM",
        mute:1,
        origin: window.location.href

      }
    },
      {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          loop: 1,
          playlist: "EnUTw4cVcE8",
          mute:1,
          origin: window.location.href

      }
    }
    ];

  const handleSlide = () => {
    setCount(0)
    if(videoRef1.current){
      videoRef1.current.internalPlayer.mute();
      document.getElementById('muteBtn1').setAttribute("class",'fas fa-volume-mute fa-2x');

    }
    if(videoRef2.current){
      videoRef2.current.internalPlayer.mute();
      document.getElementById('muteBtn2').setAttribute("class",'fas fa-volume-mute fa-2x');

    }
  }


  const playAudio = () => {

    setCount(count + 1);

    if (index == 0){
      if (count % 2 == 0){
        videoRef1.current.internalPlayer.unMute();
        document.getElementById('muteBtn1').setAttribute("class",'fas fa-volume-up fa-2x');

      }else{
        videoRef1.current.internalPlayer.mute();
        document.getElementById('muteBtn1').setAttribute("class",'fas fa-volume-mute fa-2x');

      }
    }

    if (index == 2){
      if (count % 2 == 0){
        videoRef2.current.internalPlayer.unMute();
        document.getElementById('muteBtn2').setAttribute("class",'fas fa-volume-up fa-2x');

      }else{
        videoRef2.current.internalPlayer.mute();
        document.getElementById('muteBtn2').setAttribute("class",'fas fa-volume-mute fa-2x');

      }
    }
  }


  return (
      <Carousel id="HomeCarousel" className="mx-auto carousel w-100" indicators={false} activeIndex={index} onSelect={handleSelect} onSlide={handleSlide} onSlid={handleSlide}  nextLabel="" prevLabel="">
        <Carousel.Item className="carousel-item" interval={20000}>
          <div id="player" className="videoWrapper">
            <YouTube ref= {videoRef1} videoId="9WaNGRnS6aM" opts={opts[0]}/>
          </div>

        <Carousel.Caption className="carousel-caption text-right d-sm-block d-md-block">
          <button className="btn text-white" onClick={() => playAudio()}><i id="muteBtn1" className="fas fa-volume-mute fa-2x"></i></button>
        </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-img"
            src="https://storage.cloud.google.com/radix-9544c.appspot.com/assets/front-page/Radix%20pose-min%20(1).JPG"
            alt="2nd slide"
            width="100%"
            height="100%"
          />

        </Carousel.Item>

        <Carousel.Item className="carousel-item" interval={20000}>
            <div id="player" className="videoWrapper">
              <YouTube ref={videoRef2} videoId="EnUTw4cVcE8" opts={opts[1]} />
            </div>
          <Carousel.Caption className="carousel-caption text-right d-sm-block d-md-block">
            <button className="btn text-white" onClick={() => playAudio()}><i id="muteBtn2" className="fas fa-volume-mute fa-2x"></i></button>

          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
  );
}

export default HomeCarousel;
