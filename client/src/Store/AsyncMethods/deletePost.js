import axios from "axios"

function detailsMethod(id) {
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
            const response = await axios.post('http://localhost:5000/post/delete/' + id, config)
            dispatch({ type: "CLOSE_LOADER" })
            dispatch({type:"SET_MESSAGE",payload:response.data.msg});
        } catch (error) {
            dispatch({ type: "CLOSE_LOADER" })
        }
    }
}

export default detailsMethod