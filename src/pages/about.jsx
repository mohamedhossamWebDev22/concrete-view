import React from "react";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Animator from "../components/animator";

const About = () => {
  return (
    <>
      <Animator>
      <h1 className="backLink">
        <NavLink to="/">Back</NavLink>
      </h1>

      <div className="btns">
        <button className="btn">
          <a target="_blank" href="https://www.facebook.com/Concrete.Construction.interior?mibextid=eHce3h">FaceBook</a>
        </button>
        <button className="btn">
          <a target="_blank" href="https://www.instagram.com/concrete.construction.interior/">
            Instagram
          </a>
        </button>
        <button className="btn">
          <a target="_blank" href="https://www.concrete.com.co/">Our Website</a>
        </button>
        <button className="btn">
          <a target="_blank" href="tel:+201010438834"> Phone</a>
        </button>
      </div>
      </Animator>
    </>
  );
};

export default About;
