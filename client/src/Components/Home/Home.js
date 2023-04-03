import React from 'react'
import MyCarousel from "../Carousel/MyCarousel";
import Main1 from "../Main/Main1";
import toast, { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import Organization from '../Organization/Organization';
import Gallery from "../Gallery/Gallery"
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import Card from "../Card2/Card"
import Awards from '../Awards/Awards';


function Home() {
  const dispatch = useDispatch();
  const { loading, LoginError, LoginMessage, user } = useSelector((state) => state.authReducer);
  const {createSucces } = useSelector(state => state.PostReducer);

  useEffect(() => {
    if (LoginMessage.length > 0)
      toast.success(LoginMessage);
    dispatch({ type: "CLEAR-LOGIN-SUCCESS" });
  }, [LoginMessage])

  useEffect(() => {
    if(createSucces.length > 0)
    {
        toast.success(createSucces[0].msg);
        dispatch({type:"CLEAR_CREATE_SUCCES"});
    }
}, [createSucces])

  return (
    <>
      <Toaster position="top-right" reverseOrder={false}
        toastOptions={{
          // Define default options
          duration: 5000,
          style: {
            fontsize: '16px'
          },
        }} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <MyCarousel />
      <Main1 />
      <Card />
      <Awards/>
      <Gallery />
      <Organization />
    </>
  )
}

export default Home