const initail = {
    AllPosts:[],
    Likes:[],
    Dislikes:[],
    count:0,
    perPage:0,
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
    else if (action.type === "SET_ALL_POSTS") 
        return { ...state, AllPosts: action.payload.data , count : action.payload.count , perPage : action.payload.perPage , 
        Likes : action.payload.likes , Dislikes : action.payload.dislikes };
    else if (action.type === "CLEAR_ALL_POSTS") 
        return { ...state, AllPosts: [] };
    else
        return state;
}

export default PostReducer