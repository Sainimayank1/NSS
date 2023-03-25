import axios from "axios"


function updatePost(data) {
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
            const response = await axios.post('http://localhost:5000/post/update',data, config)
            dispatch({type:"SET_UPDATE_POST_SUCESS",payload:response.data.msg});
            dispatch({ type: "CLOSE_LOADER" })
        } catch (error) {
            dispatch({type:"SET_UPDATE_POST_ERROR", payload:error.response.data.errors.errors})
            dispatch({ type: "CLOSE_LOADER" })
        }
    }
}

export default updatePost