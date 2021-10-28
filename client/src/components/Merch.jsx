import React from "react";
import venmo from "./assets/imgs/merch/venmo.png";
import pinkHoddie from "./assets/imgs/merch/pinkHoddie.png";
import blackHoddie from "./assets/imgs/merch/blackHoddie.png";
import tanHoddie from "./assets/imgs/merch/tanHoddie.png";



function Merch() {
  return (
    <div className="container-fluid justify-content-center text-center page-container">
        <h1 className="text-resp-3 font-weight-bold text-center text-pink">MERCH</h1>
        <a href="https://venmo.com/u/jadekinomoto" target="_blank"><img src={venmo} width="13%" alt="Pink Sakura Hoodie" loading="lazy"/></a>

        <div className="row justify-content-center mt-3">

          <div className="col col-sm-4 col-lg-4 merch-card">
             <div className="card-body">
             <img src={pinkHoddie} className="merch-img" alt="Pink Sakura Hoodie" loading="lazy"/>
              <h5 className="card-title roster-name">Pink Sakura Hoodie</h5>
             </div>
          </div>

          <div className="col col-sm-4 col-lg-4 merch-card">
            <div className="card-body">
              <img src={blackHoddie} className="merch-img" alt="Black Sakura Hoodie" loading="lazy"/>
              <h5 className="card-title roster-name">Black Sakura Hoodie</h5>
            </div>
          </div>

          <div className="col col-sm-4 col-lg-4 merch-card ">
            <div className="card-body">
              <img src={tanHoddie} className="merch-img" alt="Tan Lavender Hoodie" loading="lazy"/>
              <h5 className="card-title roster-name">Tan Lavender Hoodie</h5>
            </div>

          </div>

        </div>
    </div>

  );
}

export default Merch;
// the Pink Sakura hoodie, Black Sakura hoodie, and the Tan Lavender Hoodie.
