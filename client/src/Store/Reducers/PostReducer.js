const initail = {
    AllPosts: [],
    count: 0,
    perPage: 0,
    createError: [],
    createSucces: [],
    details: {
        data:{
        image: {
            public_id: '',
            url: ''
        },
        _id: '',
        title: '',
        body: '<p>sadasd</p>',
        description: '',
        slug: '',
        userName: '',
        userId: '',
        createdAt: '',
        updatedAt: '',
        __v: 0,
        likes: []
    },
    comment:[]
    }
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
        return { ...state, AllPosts: action.payload.data, count: action.payload.count, perPage: action.payload.perPage };
    else if (action.type === "CLEAR_ALL_POSTS")
        return { ...state, AllPosts: [] };
    else if (action.type === "SET_DETAIL")
        return { ...state, details: action.payload }
    else
        return state;
}

export default PostReducer