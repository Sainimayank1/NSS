const init = {
    updateNameSucces: "",
    updateNameError: [],
    updatePasswordSucces:"",
    updatePasswordError:[],
    updatePostSucces:"",
    updatePostError:[],
    updateImageSucces:"",
    feedback:"",

}
const updateReducer = (state = init, action) => {
    if (action.type === "SET_UPDATENAMEERROR")
        return { ...state, updateNameError: action.payload }
    else if (action.type === "RESET_UPDATENAMEERROR")
        return { ...state, updateNameError: [] }
    else if (action.type === "SET_UPDATENAMESUCESS")
        return { ...state, updateNameSucces: action.payload }
    else if (action.type === "RESET_UPDATENAMESUCESS")
        return { ...state, updateNameSucces:""}
    if (action.type === "SET_UPDATEPASSWORDERROR")
        return { ...state, updatePasswordError: action.payload }
    else if (action.type === "RESET_UPDATEPASSWORDERROR")
        return { ...state, updatePasswordError: [] }
    else if (action.type === "SET_UPDATEPASSWORDSUCESS")
        return { ...state, updatePasswordSucces: action.payload }
    else if (action.type === "SET_FEEDBACK_RES")
        return { ...state, feedback: action.payload };
    else if (action.type === "RESET_FEEDBACK_RES")
        return { ...state, feedback:""};
    else if (action.type === "RESET_UPDATEPASSWORDSUCESS")
        return { ...state, updatePasswordSucces:""}
    else if (action.type === "SET_UPDATE_POST_SUCESS")
        return { ...state, updatePostSucces:action.payload};
    else if (action.type === "RESET_UPDATE_POST_SUCESS")
        return {...state, updatePostSucces:""}
    else if (action.type === "SET_UPDATE_POST_ERROR")
        return { ...state, updatePostError:action.payload};
    else if (action.type === "RESET_UPDATE_POST_ERROR")
        return {...state, updatePostError:[]}
    else if (action.type === "SET_UPDATE_IMAGE_SUCCES")
        return {...state , updateImageSucces:action.payload}
    else if(action.type === "RESET_UPDATE_IMAGE_SUCCES")
        return {...state , updateImageSucces:""};
    else
        return state;
}

export default updateReducer