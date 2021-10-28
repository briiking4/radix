import React from "react";
import { Component } from 'react';
import './Members.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import ariana from './assets/imgs/roster/bkelly.png'




class Members extends React.Component {

  constructor(){
    super();

    this.state = {
      boardOn:true,
      prodOn: false,
      dancerOn: false,
      members: []
    }

    this.handleBoardOn = this.handleBoardOn.bind(this);
    this.handleProdOn = this.handleProdOn.bind(this);
    this.handleDancerOn = this.handleDancerOn.bind(this);

  }

  async componentWillMount(){
    let r = await fetch('/api');
    let message = await r.json();
    this.setState({members: message.members});
    console.log(this.state.members);
  }

  handleBoardOn(){
    this.setState({
      boardOn: true,
      prodOn: false,
      dancerOn: false
    });

  }

  handleProdOn(){
    this.setState({
      boardOn: false,
      prodOn: true,
      dancerOn: false
    });
  }

  handleDancerOn(){
    this.setState({
      boardOn: false,
      prodOn: false,
      dancerOn: true
    });
  }



  render(){

    // const showMembers = () =>
    //   this.state.members.map(function(member){
    //     return (
    //         <div className="col-sm-6 col-md-4 col-lg-3 col-12 card ">
    //            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1202219229.jpg?crop=0.868xw:0.655xh;0.120xw,0.00917xh&resize=640:*" className="card-img card-img-top" alt="card"/>
    //             <h5 className="roster-name">{member.name}</h5>
    //
    //           <div className="row" style={{paddingLeft:"10px"}}>
    //             <a href={`https://www.instagram.com/${member.instagram}`} ><i className="fab fa-instagram m-1 text-white"></i></a>
    //             <a href="#"><i className="fab fa-spotify m-1 text-white"></i></a>
    //             <a href="#"><i className="fab fa-youtube m-1 text-white"></i></a>
    //           </div>
    //
    //         </div>
    //       );
    //   });

    const showBoard = () =>
      this.state.members.map(function(member){
        if(member.category == 'eboard'){
          return (
              <div className="col-sm-6 col-md-4 col-lg-3 col-6 merch-card ">
                 <img src={ariana} className="mem-img" alt="card"/>
                <div className="row justify-content-center">
                  <h5 className="roster-name">{member.name}</h5>
                  <a href={`https://www.instagram.com/${member.instagram}`} ><i className="ml-3 mt-3 fab fa-instagram text-white"></i></a>
                </div>
                <p className="font-italic text-center">{member.role}</p>
              </div>
            );
        }

      });

      const showDancers = () =>
        this.state.members.map(function(member){
          if(member.category == 'dancer'){
            return (
              <div className="col-sm-6 col-md-4 col-lg-3 col-6 merch-card ">
                 <img src={ariana} className="mem-img" alt="card"/>
                <div className="row justify-content-center">
                  <h5 className="roster-name">{member.name}</h5>
                  <a href={`https://www.instagram.com/${member.instagram}`} ><i className="ml-3 mt-3 fab fa-instagram text-white"></i></a>
                </div>
                <p className="font-italic text-center">{member.year}</p>
              </div>
              );
          }

        });

        const showProd = () =>
          this.state.members.map(function(member){
            if(member.category == 'production'){
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 col-6 merch-card ">
                   <img src={ariana} className="mem-img" alt="card"/>
                  <div className="row justify-content-center">
                    <h5 className="roster-name">{member.name}</h5>
                    <a href={`https://www.instagram.com/${member.instagram}`} ><i className="ml-3 mt-3 fab fa-instagram text-white"></i></a>
                  </div>
                  <p className="font-italic text-center">{member.year}</p>
                </div>
                );
            }
          });

    return (
      <div className="container page-container">
      <h1 className="font-weight-bold mt-5 mb-4 text-center text-resp-3 text-pink">MEMBERS</h1>
        <div className="row justify-content-center pt-3 pl-3">

          <h2 className={this.state.boardOn ? `mx-5 member-cat roster-active` : "mx-5 member-cat"} onClick={this.handleBoardOn}>E-BOARD</h2>
          <h2 className={this.state.prodOn ? `mx-5 member-cat roster-active` : "mx-5 member-cat"} onClick={this.handleProdOn}>PRODUCTION</h2>
          <h2 className={this.state.dancerOn ? `mx-5 member-cat roster-active` : "mx-5 member-cat"} onClick={this.handleDancerOn}>DANCERS</h2>

        </div>
        <div>

          {
            this.state.members.length == 0 ?
              <Loader className="text-center mt-5"
                 type="Oval"
                 color="pink"
                 height={100}
                 width={100}
                 timeout={3000} //3 secs
               />
            :
            <div className="row mt-5 mx-auto justify-content-center">
              {this.state.boardOn ?
                showBoard()
                :
                <div></div>
              }
              {this.state.prodOn ?
                showProd()
                :
                <div></div>
              }
              {this.state.dancerOn ?
                showDancers()
                :
                <div></div>
              }
            </div>

          }

        </div>

      </div>

    );

  }

}

export default Members;
