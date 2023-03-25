import axios from "axios"

function detailsMethod(PostId) {
    return async (dispatch) => {
        dispatch({ type: "SET_LOADER" })
        try {
            const response = await axios.get('/post/:'+PostId)
            const data = response.data.data[0];
            const comment  = response.data.comment
            dispatch({type:"SET_DETAIL" , payload: {data,comment}})
            dispatch({type:"CLOSE_LOADER"})
        } catch (error) {
            dispatch({ type:"CLOSE_LOADER"})
            console.log(error)
        }
    }
}

export default detailsMethod