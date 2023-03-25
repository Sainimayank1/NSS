import axios from "axios"


function updatePassword(data) {
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
            const response = await axios.post('/user/updatePassword',data , config)
            console.log(response)
            dispatch({type:"SET_UPDATEPASSWORDSUCESS",payload:response.data.msg})
            dispatch({ type: "CLOSE_LOADER" })
        } catch (error) {
            console.log(error.response.data.errors)
            dispatch({type:"SET_UPDATEPASSWORDERROR" , payload:error.response.data.errors});
            dispatch({ type: "CLOSE_LOADER" })
        }
    }
}

export default updatePassword;