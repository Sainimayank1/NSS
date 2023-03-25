import axios from "axios"

function fetchPosts(_id, page) {
    return async (dispatch, getData) => {
        const {authReducer} = getData();
        const token = authReducer.token
        dispatch({ type: "SET_LOADER" })
        try {
            const config =
            {
                headers:{
                    Authorizaton: 'Bearer ' + token
                }
            }

            const response = await axios.get('/post/userAllPost/:'+page+'/:'+_id , config)
            console.log(response.data);
            const {data,count,perPage} = response.data
            dispatch({type:"SET_USER_POSTS" , payload : {data,count,perPage}})
            dispatch({type:"CLOSE_LOADER"})
        } catch (error) {
            dispatch({ type:"CLOSE_LOADER"})
            console.log(error)
        }
    }
}

export default fetchPosts