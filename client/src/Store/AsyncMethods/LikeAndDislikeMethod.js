import axios from "axios"

export const LikeMethod = (data) => {
    return async (dispatch, getData) => {
        const {_id , UserId}  = data;
        const { authReducer } = getData();
        const token = authReducer.token
        dispatch({ type: "SET_LOADER" })
        try {
            const config =
            {
                headers:{
                    Authorizaton: 'Bearer ' + token
                }
            }
            const response = await axios.post('http://localhost:5000/post/like' , data , config );
            // const {data ,  likes , dislikes ,count,perPage} = response.data
            // dispatch({type:"SET_ALL_POSTS" , payload : {data ,  likes , dislikes ,count,perPage}})
            dispatch({type:"CLOSE_LOADER"})
        } catch (error) {
            dispatch({ type:"CLOSE_LOADER"})
            console.log(error)
        }
    }
}


// export const DislikeMethod = (data) => {
//     return async (dispatch, getData) => {
//         const { authReducer } = getData();
//         const token = authReducer.token
//         // dispatch({ type: "SET_LOADER" })
//         try {
//             const config =
//             {
//                 headers:{
//                     Authorizaton: 'Bearer ' + token
//                 }
//             }
//             const response = await axios.post('http://localhost:5000/post/dislike' , data , config );
//             // const {data ,  likes , dislikes ,count,perPage} = response.data
//             // dispatch({type:"SET_ALL_POSTS" , payload : {data ,  likes , dislikes ,count,perPage}})
//             dispatch({type:"CLOSE_LOADER"})
//         } catch (error) {
//             dispatch({ type:"CLOSE_LOADER"})
//             console.log(error)
//         }
//     }
// }
