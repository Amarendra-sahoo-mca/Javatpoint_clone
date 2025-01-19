import React from "react";
import "./herostyle.css";
function Hero() {
  return (
    <div className="hero">
      <div className="main_cont">
        <div className="left">
          <div className="textt">
            <p className="l1">Free Online Tutorials</p>
            <h1 className="lft">Discover Your Journey with Us</h1>
            <p className="l3">
              Get access to 500+ tutorials from top instructors around the world
              in one place.
            </p>
            <div className="inputs">
              <input type="text" />
              <button className="btn"><i className="fa-solid fa-magnifying-glass" style={{color:" #ffffff"}}></i></button>
            </div>
          </div>
        </div>
        <div className="right">
        <div className="img5"></div>
          <div className="rl">
             <div className="img1">
             </div>
             <div className="img3">
             </div>
              <div className="img4">
              </div>
            <div className="img2">
              <p>
              <p className="i2p1">500+</p>
              <p className="i2p2">TUTORIALS</p>
              </p>
            </div>
          </div>
          <div className="rr">
            
            <div className="img6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
