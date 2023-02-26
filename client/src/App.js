import Main_navbar from "./Components/Navbars/Main_navbar";
import Navbar from "./Components/Navbars/Navbar";
import MyCarousel from "./Components/Carousel/MyCarousel";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import EmailVerify from "./Components/EmailVerify/EmailVerify";

function App() {
  return (
    <>
    <Main_navbar/>
       <Navbar/>
    <Routes>
      {/* <MyCarousel />  */}
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
    </Routes>
    </>
  );
}

export default App;
