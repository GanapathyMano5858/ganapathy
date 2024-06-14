import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Component/Landing_Page/LandingPage";
import NavBar from "./Component/NavBar/NavBar";
import { AboutUs } from "./Component/AboutUs/AboutUs";
import { Services } from "./Component/Services/Services";
import { Contact } from "./Component/Contact/Contact";

const App = () => {
  return (
    <div className="App">  
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
