import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import WebcamValidation from "./components/webValidation";
import "./App.css";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/webcam-validation" element={<WebcamValidation/>} />
      </Routes>
    </Router>
  );
}

export default App;
