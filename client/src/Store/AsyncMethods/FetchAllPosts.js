import axios from "axios"

function fetchPosts(page) {
    return async (dispatch, getData) => {
        const { authReducer } = getData();
        const token = authReducer.token
        dispatch({ type: "SET_LOADER" })
        try {
            const response = await axios.get('http://localhost:5000/post/posts/:'+page)
            console.log(response.data.data);
            dispatch({type:"SET_ALL_POSTS",payload : response.data.data})
            dispatch({type:"CLOSE_LOADER"})
        } catch (error) {
            dispatch({ type:"CLOSE_LOADER"})
            console.log(error)
        }
    }
}

export default fetchPosts