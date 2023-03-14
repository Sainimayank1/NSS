const initail = {
    posts:[],
    count:0,
    perPage:0
};


const FetchReducer = (state = initail, action) => {
    if (action.type === "SET_USER_POSTS")
        return { ...state, posts: action.payload.data, count: action.payload.count, perPage: action.payload.perPage };
    else if (action.type === "CLEAR_USER_POSTS")
        return { ...state, AllPosts: [] };
    else
        return state;
}

export default FetchReducer