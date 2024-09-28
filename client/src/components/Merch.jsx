import React from "react";
import venmo from "./assets/imgs/merch/venmo.png";



function Merch() {
  return (
    <div className="container-fluid justify-content-center text-center page-container merch-page">
        <h1 className="text-resp-3 font-weight-bold text-center text-pink">MERCH</h1>
        <a href="https://venmo.com/u/jadekinomoto" target="_blank"><img src={venmo} width="130vh" alt="Pink Sakura Hoodie" loading="lazy"/></a>

        <div className="row justify-content-center mt-3">

          <div className="col-8 col-sm-4 col-lg-3 merch-card">
             <div className="card-body">
             <img src="https://storage.cloud.google.com/radix-9544c.appspot.com/assets/merch/pinkHoddie-min.jpg" className="merch-img" alt="Pink Sakura Hoodie" loading="lazy"/>
              <h5 className="card-title roster-name">Pink Sakura Hoodie</h5>
             </div>
          </div>

          <div className="col-8 col-sm-4 col-lg-3 merch-card">
            <div className="card-body">
              <img src="https://storage.cloud.google.com/radix-9544c.appspot.com/assets/merch/blackHoddie-min.jpg" className="merch-img" alt="Black Sakura Hoodie" loading="lazy"/>
              <h5 className="card-title roster-name">Black Sakura Hoodie</h5>
            </div>
          </div>

          <div className="col-8 col-sm-4 col-lg-3 merch-card ">
            <div className="card-body">
              <img src="https://storage.cloud.google.com/radix-9544c.appspot.com/assets/merch/tanHoddie-min.jpg" className="merch-img" alt="Tan Lavender Hoodie" loading="lazy"/>
              <h5 className="card-title roster-name">Tan Lavender Hoodie</h5>
            </div>

          </div>

        </div>
    </div>

  );
}

export default Merch;
// the Pink Sakura hoodie, Black Sakura hoodie, and the Tan Lavender Hoodie.
