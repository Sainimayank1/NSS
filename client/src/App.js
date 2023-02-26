import Main_navbar from "./Components/Navbars/Main_navbar";
import Navbar from "./Components/Navbars/Navbar";
import MyCarousel from "./Components/Carousel/MyCarousel";
import Main1 from "./Components/Main/Main1";
import React from "react";
import Organization from "./Components/Organization/Organization";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Main_navbar/>
      <Navbar/>
      <MyCarousel />
      <Main1 />
      <Organization />
      <Footer />

    </>
  );
}

export default App;
