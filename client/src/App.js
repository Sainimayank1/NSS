import Main_navbar from "./Components/Navbars/Main_navbar";
import Navbar from "./Components/Navbars/Navbar";
import React from "react";
import Footer from "./Components/footer/footer";
import { Route, Routes, Navigate } from "react-router-dom";
import EmailVerify from "./Components/EmailVerify/EmailVerify";
import Home from "./Components/Home/Home";
import Login from "./Components/auth/Login"
import Register from "./Components/auth/Register";
import Loading from "./Components/Loader/Loading";
import NotFound from "./Components/auth/NotFound.js";
import { useSelector } from "react-redux";
import CreatePost from "./Components/Createpost/CreatePost";
import Posts from "./Components/Posts/Posts";
import Details from "./Components/Detail/Detail";

function App() {
  const {user} = useSelector((state) => state.authReducer)
  return (
    <>
      <Main_navbar/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element= {user ? <Home/> : <Login/> }/>
      <Route path="/register" element={user ? <Home/> :<Register/>} />
      <Route path="/createPost" element={user ? <CreatePost/> :<Login/>} />
      <Route path="/posts/:page" element={<Posts/>} />
      <Route path="/details/:id" exact element={<Details />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/loader" element={<Loading/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
