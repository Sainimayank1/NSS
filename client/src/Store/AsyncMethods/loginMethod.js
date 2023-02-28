import axios from "axios"

const postLogin = (state) =>
{
  return async (dispatch) => {
    const config =
    {
      header: {
        'Content-type': 'application/json'
      }
    }
    dispatch({ type: 'SET_LOADER' })
    try {
      const response = await axios.post('http://localhost:5000/login', state,config)
      if (response) {
        localStorage.setItem('NSSTOKEN',response.data.token);
        dispatch({type:"LOGIN-SUCCESS",payload:response.data.msg})
        dispatch({type :"SET_TOKEN",payload:response.data.token})
      }
      else
        dispatch({ type: "LOGIN_ERRORS", payload: response.data.errors })
      dispatch({ type: "CLOSE_LOADER" })

    } catch (error) {
      dispatch({ type: "CLOSE_LOADER" })
      dispatch({ type: "LOGIN_ERRORS", payload: error.response.data.errors })
    }
  }
}

export default postLogin