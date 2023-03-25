import axios from "axios"


function updateName(data) {
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
            const response = await axios.post('/user/updateNames',data ,  config)
            localStorage.setItem('NSSTOKEN',response.data.token);
            dispatch({type:"SET_UPDATENAMESUCESS",payload:response.data.msg})
            dispatch({type:"SET_TOKEN",payload:response.data.token})
            dispatch({ type: "CLOSE_LOADER" })
        } catch (error) {
            console.log(error)
            dispatch({type:"SET_UPDATENAMEERROR" , payload:error.response.data.error})
            dispatch({ type: "CLOSE_LOADER" })
        }
    }
}

export default updateName;