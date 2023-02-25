import Main_navbar from "./Components/Navbars/Main_navbar";
import Navbar from "./Components/Navbars/Navbar";
import MyCarousel from "./Components/Carousel/MyCarousel";
import Main1 from "./Components/Main/Main1";
import React from "react";
import Organization from "./Components/Organization/Organization";

function App() {
  return (
    <>
      <Main_navbar/>
      <Navbar/>
      <MyCarousel />
      <Main1 />
      <Organization />
    </>
  );
}

export default App;
