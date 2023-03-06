import axios from "axios"

function fetchPosts(id) {
    return async (dispatch, getData) => {
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
            const response = await axios.get('http://localhost:5000/post/posts', config)
            console.log(response.data.data);
            dispatch({type:"SET_ALL_POSTS",payload : response.data.data})
            // console.log("hello")
            dispatch({type:"CLOSE_LOADER"})
        } catch (error) {
            dispatch({ type:"CLOSE_LOADER"})
            console.log(error)
        }
    }
}

export default fetchPosts