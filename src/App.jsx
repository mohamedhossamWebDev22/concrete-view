import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import './style.scss'

import logo from "./assets/logo.png"

import Animator from './components/animator';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Animator>
      <div className="title">
        <img src={logo} alt="Logo" />
        <div className="txt">
          <h1>C O N C R E T E</h1>
          <h2>View</h2>

        </div>
      </div>

      <p className='projName'>
        <c>B</c>eta Greens Villa
        <br />
        <c>M</c>r.Sherif Elshazly
      </p>

      <div className="btns">
        <button className='btn'>
          <NavLink to="/view">Start</NavLink>
        </button>
        <button className='btn'>
          <NavLink to="/about">About Us</NavLink>
        </button>
      </div>
    </Animator>
    </>
  )
}

export default App;