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
import Card from "./Components/Card2/Card";
import Dashboard from "./Components/DashBoard/DashBoard";
import Edit from "./Components/edit/Edit";
import UpdateName from "./Components/update/updateName";
import UpdatePassword from "./Components/update/updatePassword.js";
import Feedback from "./Components/feedback/feedback.js";
import Contact from "./Components/contact/Contact";
import Gallentry from "./Components/Gallentry/Gallentry";

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
      <Route path="/dashboard/:page" element={user ? <Dashboard/> :<Login/>} />
      <Route path="/posts/:page" element={<Posts/>} />
      <Route path="/details/:id" exact element={<Details />} />
      <Route path="/edit/:Postid" exact  element={user ? <Edit/> : <Login/>} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/updateName" exact element={user ? <UpdateName/> :<Login/>}/>
      <Route path="/updatePassword" exact element={user ? <UpdatePassword/> : <Login/>} />
      <Route path="/feedback" exact element={user ? <Feedback/> : <Login/>} />
      <Route path="/contact" exact element={<Contact/>}/>
      <Route path="/virChakra/:id" exact element={<Gallentry/>} />
      <Route path="/mahaVir/:id" exact element={<Gallentry/>} />
      <Route path="/paramvirChakra/:id" exact element={<Gallentry/>} />
      <Route path="/ashokaChakra/:id" exact element={<Gallentry/>} />
      <Route path="/kirtiChakra/:id" exact element={<Gallentry/>} />
      <Route path="/shauryaChakra/:id" exact element={<Gallentry/>} />
      <Route path="/loader" element={<Loading/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer />
 
    </>
  );
}

export default App;
