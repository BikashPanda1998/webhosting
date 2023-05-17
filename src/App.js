import React from "react";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Testimonial from "./pages/Testimonial";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Servicess from "./pages/Servicess";


function App() {
  return (
      <div>
    <Header/>
      <Routes>
    <Route path="/" element={<Home/>} exact/>
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/service" element={<Servicess/>} />
      </Routes>
    <Testimonial/>
    <Footer/>
    
      </div>
  );
}

export default App;
