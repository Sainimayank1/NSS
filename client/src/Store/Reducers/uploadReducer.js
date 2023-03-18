const initail = {
   pic:{},
   video:{},
};  


const PostReducer = (state = initail, action) => {
    if (action.type === "SET_PIC_DETAIL")
        return { ...state, createError: action.payload };
    else if (action.type === "SET_VIDEO_DETAIL")
        return { ...state, createError: action.payload };
    else
        return state;
}

export default PostReducer