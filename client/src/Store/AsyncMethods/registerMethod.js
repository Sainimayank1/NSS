import axios from "axios";
// import { useDispatch } from "react-redux";
// import toast, { Toaster } from "react-hot-toast"

export const registerMethod = (state) => {
  return async (dispatch) => {
    const config = {
      header: {
        "Content-type": "application/json",
      },
    };


    dispatch({ type: "SET_LOADER" });
    try {
      console.log(state)
      const response = await axios.post("http://localhost:5000/register",state,config );
      if (!response)
        dispatch({ type: "REGISTER_ERRORS", payload: response.data.errors });
      else
        dispatch({type:"REGISTER-SUCCESS" , payload:response.data.message})
      dispatch({ type: "CLOSE_LOADER" });
    } catch (error) {
      dispatch({ type: "CLOSE_LOADER" });
      console.log(error)
      dispatch({
        type: "REGISTER_ERRORS",
        payload: error.response.data.errors,
      });
    }
  };
};
