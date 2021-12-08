import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">CS Lab 6</h1>

    <p className="lead">
      by Isac Arthur and Eugeniu Chetrar. Authentication flow for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
