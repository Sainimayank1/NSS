const initail = {
    createError:[],
    createSucces:[],
};


const PostReducer = (state = initail, action) => {
    if (action.type === "SET_CREATE_ERROR") 
        return { ...state, createError: action.payload };
    else if (action.type === "CLEAR_CREATE_ERROR") 
        return { ...state, createError: [] };
    if (action.type === "SET_CREATE_SUCCES") 
        return { ...state, createSucces: action.payload };
    else if (action.type === "CLEAR_CREATE_SUCCES") 
        return { ...state, createSucces: [] };
    else
        return state;
}

export default PostReducer