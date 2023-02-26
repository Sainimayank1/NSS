import Main_navbar from "./Components/Navbars/Main_navbar";
import Navbar from "./Components/Navbars/Navbar";
import MyCarousel from "./Components/Carousel/MyCarousel";
import Main1 from "./Components/Main/Main1";
import React from "react";
<<<<<<< HEAD
import Organization from "./Components/Organization/Organization";
import Footer from "./Components/Footer/Footer";

=======
import { Route, Routes, Navigate } from "react-router-dom";
import EmailVerify from "./Components/EmailVerify/EmailVerify";
>>>>>>> f42253e5501675f9b9ef3544e0aae2531fca39ea

function App() {
  return (
    <>
<<<<<<< HEAD
      <Main_navbar/>
      <Navbar/>
      <MyCarousel />
      <Main1 />
      <Organization />
      <Footer />

=======
    <Main_navbar/>
       <Navbar/>
    <Routes>
      {/* <MyCarousel />  */}
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
    </Routes>
>>>>>>> f42253e5501675f9b9ef3544e0aae2531fca39ea
    </>
  );
}

export default App;
