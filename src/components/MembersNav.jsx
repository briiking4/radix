import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Component } from 'react';

class MembersNav extends React.Component {

  constructor(){
    const membersList = []

  }



  render(){

    const showMembers =
      this.state.playlistList.map(function(playlist){
        return (
          <div key={playlist.id} className="col-sm-6 col-md-4 col-lg-3 col-12 card">
             <img src={playlist.image} id= {playlist.id} name= {playlist.name} owner = {playlist.ownerId} onClick={selected} className="card-img card-img-top" alt="card"/>
             <div className="card-body">
               <p className="card-text font-weight-bold">{playlist.name}</p>
             </div>
          </div>
           )
      });

    return (
      <div className="container pt-5">
        <div className="row justify-content-center">

          <button className="mx-5 btn btn-link">ARTISTS</button>
          <button className="mx-5 btn btn-link">BUSINESS</button>
          <button className="mx-5 btn btn-link">CONTENT</button>

        </div>

      </div>

    );

  }

}

export default MembersNav;
