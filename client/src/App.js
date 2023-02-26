import Main_navbar from "./Components/Navbars/Main_navbar";
import Navbar from "./Components/Navbars/Navbar";
import React from "react";
import Footer from "./Components/footer/footer";
import { Route, Routes, Navigate } from "react-router-dom";
import EmailVerify from "./Components/EmailVerify/EmailVerify";
import Home from "./Components/Home/Home";
import Login from "./Components/auth/Login"

function App() {
  return (
    <>
      <Main_navbar/>
      <Navbar/>
      <Routes>
      {/* <MyCarousel />  */}
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
