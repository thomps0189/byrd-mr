import React from "react";
const droneImg = require("../../assets/Images/Drone.png");
const shadow = require("../../assets/Images/Shadow.png");

function Hero() {
  return (
    <section id="hero">
      <div id="img-div">
        <img id="drone-img" src={droneImg} alt="drone" /> <br />
        <img id="drone-shadow" src={shadow} alt="shadow" />
      </div>
      <div>
        <h1>F-210</h1>
      </div>
      <div id="hero-comment">
        <span>"THE FASTEST DRONE ON THE PLANET"</span> <br /> -"The Wirecutter"
      </div>
    </section>
  );
}

export default Hero;
