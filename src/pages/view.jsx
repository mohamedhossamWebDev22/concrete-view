import React from "react";

import { useState } from "react";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import imgT1 from "../assets/thum/1.jpg";
import imgT2 from "../assets/thum/2.jpg";
import imgT3 from "../assets/thum/3.jpg";
import imgT4 from "../assets/thum/4.jpg";
import imgT5 from "../assets/thum/5.jpg";
import imgT6 from "../assets/thum/6.jpg";
import imgT7 from "../assets/thum/7.jpg";

import plan1 from "../assets/plans/1.jpeg";
import plan2 from "../assets/plans/2.jpeg";
import plan3 from "../assets/plans/3.jpeg";

import mark from "../assets/plans/marker.png";

const Room1 =
    "https://momento360.com/e/u/02da83befec14bd5b405d4dba738195e?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  Room2 =
    "https://momento360.com/e/u/53d60a01ed9f4d518321afa594115f52?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  Room3 = 
    "https://momento360.com/e/u/035032361bd04fb8879ae54a39fbaed7?utm_campaign=embed&utm_source=other&heading=15.33&pitch=6.86&field-of-view=75&size=medium&display-plan=true",
  Kitchen =
    "https://momento360.com/e/u/6d05c20dc293412f93cd22242f68fdbe?utm_campaign=embed&utm_source=other&heading=2.7&pitch=-4.5&field-of-view=75&size=medium&display-plan=true",
  Rcpt =
    "https://momento360.com/e/u/ac1fbd7b54324a189dea20819cfa5d11?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  roof =
    "https://momento360.com/e/u/8946f68c82174594af16091d2ccebd75?utm_campaign=embed&utm_source=other&heading=252.93&pitch=-1.62&field-of-view=75&size=medium&display-plan=true",
  base =
    "https://momento360.com/e/u/7d8a7db0bdfe46ca8a1cc877be9ebe78?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  base2 =
    "https://momento360.com/e/u/3195ef731f4e4d1399ea596275bb77b5?utm_campaign=embed&utm_source=other&heading=13.6&pitch=-3.1&field-of-view=75&size=medium&display-plan=true";

const View = () => {
  const [img, setimg] = useState("");
  const [pano, setpano] = useState(Rcpt);

  const [hide, sethide] = useState("hide");

  const changeImg = (img) => {
    setpano(img);
    sethide("hide");
  };

  return (
    <>
      <div className={"containRooms"}>
        <div className={"chooseRoom " + hide}>
          <button id="back" onClick={() => sethide("hide")}>
            Back
          </button>

          <h1>Choose Room</h1>

          {/* <div className="rooms">
            <button
              onClick={function (event) {
                setpano(Room1);
                sethide("hide");
              }}
              className="room"
            >
              <img src={imgT3} alt="" />
              <p>Room 1</p>
            </button>
            <button
              onClick={function (event) {
                setpano(Room2);
                sethide("hide");
              }}
              className="room"
            >
              <img src={imgT4} alt="" />
              <p>Room 2</p>
            </button>
            <button
              onClick={function (event) {
                setpano(Kitchen);
                sethide("hide");
              }}
              className="room"
            >
              <img src={imgT1} alt="" />
              <p>Kitchen</p>
            </button>
            <button
              onClick={function (event) {
                setpano(base);
                sethide("hide");
              }}
              className="room"
            >
              <img src={imgT2} alt="" />
              <p>Basement</p>
            </button>
            <button
              onClick={function (event) {
                setpano(base2);
                sethide("hide");
              }}
              className="room"
            >
              <img src={imgT7} alt="" />
              <p>Basement 2</p>
            </button>
            <button
              onClick={function (event) {
                setpano(Rcpt);
                sethide("hide");
              }}
              className="room"
            >
              <img src={imgT5} alt="" />
              <p>Reception</p>
            </button>
            <button
              onClick={function (event) {
                setpano(roof);
                sethide("hide");
              }}
              className="room"
            >
              <img src={imgT6} alt="" />
              <p>Roof</p>
            </button>
          </div> */}

          <div className="RoomPlans">
            <button className="ChooseFloor">
              <p>Ground Floor</p>
              <p>{">"}</p>
            </button>

            <div className="plan">
              <img src={plan2} alt="plan image" />
              <button
                onClick={function (event) {
                  changeImg(Rcpt);
                }}
                id="mark1"
              >
                <img src={mark} alt="Mark" />
              </button>
              <button
                onClick={function (event) {
                  changeImg(Kitchen);
                }}
                id="mark2">
                <img src={mark} alt="Mark" />
              </button>
            </div>

            <button className="ChooseFloor">
              <p>First Floor</p>
              <p>{">"}</p>
            </button>

            <div className="plan">
              <img src={plan1} alt="plan image" />
              <button
                onClick={function (event) {
                  changeImg(Room2);
                }}
                id="mark3">
                <img src={mark} alt="Mark" />
              </button>
              <button
                onClick={function (event) {
                  changeImg(Room1);
                }}
                id="mark4">
                <img src={mark} alt="Mark" />
              </button>
              <button
                onClick={function (event) {
                  changeImg(Room3);
                }}
                id="mark6">
                <img src={mark} alt="Mark" />
              </button>
            </div>

            <button className="ChooseFloor">
              <p>Basement</p>
              <p>{">"}</p>
            </button>

            <div className="plan">
              <img src={plan3} alt="plan image" />
              <button
                onClick={function (event) {
                  changeImg(base2);
                }}
                id="mark5">
                <img src={mark} alt="Mark" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="backLink">
        <NavLink to="/">Back</NavLink>
      </h1>

      <div className="btnsView">
        <button onClick={() => sethide("show")}>Choose Room</button>
      </div>

      <div id="view">
        <iframe src={pano} frameborder="0" allowFullScreen></iframe>
      </div>

      <p className="hint">Wait 3:5 Seconds For Loading The Scene.</p>
    </>
  );
};

export default View;
