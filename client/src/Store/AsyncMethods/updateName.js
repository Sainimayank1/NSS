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
            console.log(data.name ,data._id)
            const response = await axios.post('http://localhost:5000/user/updateNames',data ,  config)
            console.log(response)
            localStorage.setItem('NSSTOKEN',response.data.token);
            dispatch({ type: "CLOSE_LOADER" })
            // dispatch({type:"SET_MESSAGE",payload:response.data.msg})
            // dispatch({type:"SET_TOKEN",payload:response.data.token})
        } catch (error) {
            dispatch({type:"SET_UPDATENAMEERROR" , payload:error.response.data.error})
            dispatch({ type: "CLOSE_LOADER" })
        }
    }
}

export default updateName;