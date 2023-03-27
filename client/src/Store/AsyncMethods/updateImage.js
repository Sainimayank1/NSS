import axios from "axios"


function updateImage(data) {
    return async (dispatch,getData) => {
        const { authReducer } = getData();
        const token = authReducer.token
        dispatch({ type: "SET_LOADER" })
        const config =
        {
            headers: {
                Authorizaton: 'Bearer ' + token
            }
        }
        try {
            const response = await axios.post('/user/updateImage',data ,  config)
            console.log(response.data.token)
            dispatch({type :"SET_TOKEN",payload:response.data.token})
            localStorage.setItem('NSSTOKEN',response.data.token);
            dispatch({type:"SET_UPDATE_IMAGE_SUCCES",payload:response.data.msg});
            dispatch({ type: "CLOSE_LOADER" })
        } catch (error) {
            console.log(error)
            dispatch({type:"SET_UPDATE_IMAGE_ERROR",payload:error.error})
            dispatch({ type: "CLOSE_LOADER" })
        }
    }
}

export default updateImage;