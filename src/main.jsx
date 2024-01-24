import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import About from "./pages/about.jsx";
import View from "./pages/view.jsx";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfQDrtGegb-0xnpi812m5TmZBCKLQHLRY",
  authDomain: "concrete-view.firebaseapp.com",
  projectId: "concrete-view",
  storageBucket: "concrete-view.appspot.com",
  messagingSenderId: "305477491241",
  appId: "1:305477491241:web:29d9287974213a7a205a38",
  measurementId: "G-7G77VMMR12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
