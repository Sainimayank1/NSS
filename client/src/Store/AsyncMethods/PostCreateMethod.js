import axios from "axios"


 const CreatePostMethod = (postData) =>
{
    return async(dispatch , getData) =>
    {
        const {authReducer} = getData();
        const token = authReducer.token
        dispatch({type:"SET_LOADER"})
        try {
            const config =
            {
                headers:{
                    Authorizaton: 'Bearer ' + token
                }
            }

            const data  = await axios.post("http://localhost:5000/post/create",postData,config);
            dispatch({type:"CLOSE_LOADER"})
            dispatch({type:'SET_CREATE_SUCCES',payload:data.data})
            console.log(data)
        } catch (error) {
            console.log(error)
            dispatch({type:"CLOSE_LOADER"})
            dispatch({type:"SET_CREATE_ERROR" ,payload:error.response.data.errors})
            console.log(error.response);
        }

    }
}

export default CreatePostMethod