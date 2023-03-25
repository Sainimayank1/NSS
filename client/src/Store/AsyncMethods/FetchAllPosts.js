import axios from "axios"

function fetchPosts(page) {
    return async (dispatch) => {
        dispatch({ type: "SET_LOADER" })
        try {
            const response = await axios.get('/post/posts/:'+page)
            const {data ,  likes , dislikes ,count,perPage} = response.data
            dispatch({type:"SET_ALL_POSTS" , payload : {data  ,count,perPage}})
            dispatch({type:"CLOSE_LOADER"})
        } catch (error) {
            dispatch({ type:"CLOSE_LOADER"})
            console.log(error)
        }
    }
}

export default fetchPosts