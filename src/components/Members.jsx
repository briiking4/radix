import React from "react";
import './Members.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import {db} from "../firebase/config";


class Members extends React.Component {

  constructor(){
    super();

    this.state = {
      boardOn:true,
      prodOn: false,
      dancerOn: false,
      members: null
    }

    this.handleBoardOn = this.handleBoardOn.bind(this);
    this.handleProdOn = this.handleProdOn.bind(this);
    this.handleDancerOn = this.handleDancerOn.bind(this);

  }



 componentDidMount(){
    const getMembersFromFirebase = [];
    const member = db.collection("members").onSnapshot((querySnapshot) =>{
      querySnapshot.forEach((doc) => {
        getMembersFromFirebase.push({
          ...doc.data(),
          key: doc.id,

        });
        this.setState({members: getMembersFromFirebase});
      });
    });
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

    const showBoard = () =>
      this.state.members.map(function(member){
        if(member.category == 'eboard'){
          return (
              <div className="col-8 col-md-4 col-lg-3 col-6 merch-card ">
                 <img src={member.picture} className="mem-img" width="250" height="350" alt="card" loading="lazy"/>
                <div className="row justify-content-center">
                  <h5 className="roster-name">{member.name}</h5>
                  <a href={`https://www.instagram.com/${member.instagram}`} ><i className="ml-3 mt-3 fab fa-instagram text-pink"></i></a>
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
              <div className="col-8 col-md-4 col-lg-3 col-6 merch-card ">
                 <img src={member.picture} className="mem-img" width="250" height="350" alt="card" loading="lazy"/>
                <div className="row justify-content-center">
                  <h5 className="roster-name">{member.name}</h5>
                  <a href={`https://www.instagram.com/${member.instagram}`} ><i className="ml-3 mt-3 fab fa-instagram text-pink"></i></a>
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
                <div className="col-8 col-md-4 col-lg-3 col-6 merch-card ">
                   <img src={member.picture} className="mem-img" width="250" height="350" alt="card" loading="lazy"/>
                  <div className="row justify-content-center">
                    <h5 className="roster-name">{member.name}</h5>
                    <a href={`https://www.instagram.com/${member.instagram}`} ><i className="ml-3 mt-3 fab fa-instagram text-pink"></i></a>
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
          <h2 className={this.state.dancerOn ? `mx-5 member-cat roster-active` : "mx-5 member-cat"} onClick={this.handleDancerOn}>DANCERS</h2>

        </div>
        <div>

          {
            !this.state.members ?
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
