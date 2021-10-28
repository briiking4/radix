import React from "react";
import { useState, useEffect } from 'react';
import './Events.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import event1 from './assets/imgs/events/jade.png'
import event2 from './assets/imgs/events/milan.png'





class Events extends React.Component {

  constructor(){
    super();

    this.state = {
      events: []
    }

  }



  async componentWillMount(){
    let r = await fetch('/api');
    let message = await r.json();
    this.setState({events: message.events});
    console.log(this.state.events);
  }


  render(){

    const showEvents =
      this.state.events.map(function(event){
        return (
            <div className="col-3 card">
              <img className="event-img" src={event1} alt="Card image cap" loading="lazy"/>
              <h6 className="roster-name">{event.event_title}</h6>
              <small className="text-light-gray ">{event.event_subtitle}</small>
              <small className="text-light-gray ">{event.event_date}</small>
              <small className="text-light-gray ">{event.event_time}</small>

              <a href="#"><i class="fas fa-2x fa-arrow-right m-1 text-success text-resp-1"></i></a>

            </div>
           )
      });

    return (
      <div class="container page-container">
        <h1 class="font-weight-bold text-pink text-center text-resp-3">EVENTS</h1>

        {
          this.state.events.length == 0 ?
            <Loader className="text-center mt-5"
               type="Oval"
               color="pink"
               height={100}
               width={100}
               timeout={3000} //3 secs
             />
          :
          <div className="row mt-5 justify-content-center">
            {showEvents}
          </div>

        }



      </div>

    );

  }

}

export default Events;
