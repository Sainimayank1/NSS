import axios from "axios"

function detailsMethod(PostId) {
    return async (dispatch) => {
        dispatch({ type: "SET_LOADER" })
        try {
            const response = await axios.get('http://localhost:5000/post/:'+PostId)
            dispatch({type:"SET_DETAIL" , payload: response.data.data[0]})
            dispatch({type:"CLOSE_LOADER"})
        } catch (error) {
            dispatch({ type:"CLOSE_LOADER"})
            console.log(error)
        }
    }
}

export default detailsMethod