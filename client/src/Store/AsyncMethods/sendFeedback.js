import axios from "axios"


function sendFeedback(data) {
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
            console.log(data)
            const response = await axios.post('/user/feedback',data ,  config)
            dispatch({type:"SET_FEEDBACK_RES",payload:response.data.msg})
            dispatch({ type: "CLOSE_LOADER" })
        } catch (error) {
            console.log(error)
            dispatch({ type: "CLOSE_LOADER" })
        }
    }
}

export default sendFeedback;