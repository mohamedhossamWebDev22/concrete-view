import React from "react";

import { useState, useEffect } from "react";

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
import plan4 from "../assets/plans/4.jpeg";

import mark from "../assets/plans/marker.png";
import Animator from "../components/animator";

const Room1 =
    "https://momento360.com/e/u/02da83befec14bd5b405d4dba738195e?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  Room2 =
    "https://momento360.com/e/u/53d60a01ed9f4d518321afa594115f52?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  Room3 =
    "https://momento360.com/e/u/035032361bd04fb8879ae54a39fbaed7?utm_campaign=embed&utm_source=other&heading=15.33&pitch=6.86&field-of-view=75&size=medium&display-plan=true",
  Kitchen =
    "https://momento360.com/e/u/935a78439fca4e6c85a1fa9bae2335b8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  Rcpt =
    "https://momento360.com/e/u/ac1fbd7b54324a189dea20819cfa5d11?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  roof =
    "https://momento360.com/e/u/8946f68c82174594af16091d2ccebd75?utm_campaign=embed&utm_source=other&heading=252.93&pitch=-1.62&field-of-view=75&size=medium&display-plan=true",
  base =
    "https://momento360.com/e/u/7d8a7db0bdfe46ca8a1cc877be9ebe78?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  base2 =
    "https://momento360.com/e/u/3195ef731f4e4d1399ea596275bb77b5?utm_campaign=embed&utm_source=other&heading=13.6&pitch=-3.1&field-of-view=75&size=medium&display-plan=true",
  garden =
    "https://momento360.com/e/u/d0b7e6b9515d49a88a80efb78c71bb17?utm_campaign=embed&utm_source=other&heading=351.9&pitch=2.67&field-of-view=75&size=medium&display-plan=true",
  roof1 = 
    "https://momento360.com/e/u/ac04ef8de8424b5c80a7b0163456346b?utm_campaign=embed&utm_source=other&heading=22.2&pitch=-0.6&field-of-view=75&size=medium&display-plan=true",
  roof2 = 
    "https://momento360.com/e/u/20927e7483f141c4a46e1731998af1c7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  masterBath = 
    "https://momento360.com/e/u/a637c48a5f544db6b0ba2da60026930d?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  roofBath = 
    "https://momento360.com/e/u/229690a749dd4103841e9f8795a0458d?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  guestBath =
    "https://momento360.com/e/u/733c86e914544f968b18454a1ab4eb6d?utm_campaign=embed&utm_source=other&heading=-19.3&pitch=0&field-of-view=75&size=medium&display-plan=true",
  commonBath = 
    "https://momento360.com/e/u/fea7ec349c8e45db95b2c26c0acb7b60?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  BasementBath = 
    "https://momento360.com/e/u/b70c37668d3845399f528e9918328d25?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
  living = 
    "https://momento360.com/e/u/78d7e7c7b29a48ee97333dec45d11584?utm_campaign=embed&utm_source=other&heading=-3.7&pitch=6.5&field-of-view=75&size=medium&display-plan=true";
  

const View = () => {
  const [img, setimg] = useState("");
  const [pano, setpano] = useState(Rcpt);

  const [hide, sethide] = useState("hide");

  const changeImg = (img) => {
    setpano(img);
    sethide("hide");
  };
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) { // Check if escape key was pressed
        // Your code to hide the div goes here
        sethide("hide")
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <>
      <Animator>
        <div className={"containRooms"}>
          <div id="Cr" className={"chooseRoom " + hide}>
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

              {/* Ground Floor */}

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
                  id="mark2"
                >
                  <img src={mark} alt="Mark" />
                </button>
                <button
                  onClick={function (event) {
                    changeImg(guestBath);
                  }}
                  id="mark10"
                >
                  <img src={mark} alt="Mark" />
                </button>
              </div>

              {/* First Floor  */}

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
                  id="mark3"
                >
                  <img src={mark} alt="Mark" />
                </button>
                <button
                  onClick={function (event) {
                    changeImg(Room1);
                  }}
                  id="mark4"
                >
                  <img src={mark} alt="Mark" />
                </button>
                <button
                  onClick={function (event) {
                    changeImg(Room3);
                  }}
                  id="mark6"
                >
                  <img src={mark} alt="Mark" />
                </button>

                <button
                  onClick={function (event) {
                    changeImg(masterBath);
                  }}
                  id="mark8"
                >
                  <img src={mark} alt="Mark" />
                </button>
                <button
                  onClick={function (event) {
                    changeImg(commonBath);
                  }}
                  id="mark11"
                >
                  <img src={mark} alt="Mark" />
                </button>
                <button
                  onClick={function (event) {
                    changeImg(living);
                  }}
                  id="mark12"
                >
                  <img src={mark} alt="Mark" />
                </button>
              </div>

              {/* Basement Floor */}

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
                  id="mark5"
                >
                  <img src={mark} alt="Mark" />
                </button>
                <button
                  onClick={function (event) {
                    changeImg(garden);
                  }}
                  id="mark7"
                >
                  <img src={mark} alt="Mark" />
                </button>
                <button
                  onClick={function (event) {
                    changeImg(BasementBath);
                  }}
                  id="mark10"
                >
                  <img src={mark} alt="Mark" />
                </button>
              </div>

              {/* Roof Plan */}

              <button className="ChooseFloor">
                <p>Roof</p>
                <p>{">"}</p>
              </button>

              <div className="plan">
                <img src={plan4} alt="plan image" />
                <button
                  onClick={function (event) {
                    changeImg(roof);
                  }}
                  id="mark1"
                >
                  <img src={mark} alt="Mark" />
                </button>
                <button
                  onClick={function (event) {
                    changeImg(roof1);
                  }}
                  id="mark3"
                >
                  <img src={mark} alt="Mark" />
                </button>
                <button
                  onClick={function (event) {
                    changeImg(roof2);
                  }}
                  id="mark4"
                >
                  <img src={mark} alt="Mark" />
                </button>
                <button
                  onClick={function (event) {
                    changeImg(roofBath);
                  }}
                  id="mark9"
                >
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
      </Animator>
    </>
  );
};

export default View;
