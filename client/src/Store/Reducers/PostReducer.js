const initail = {
    message: "",
    updateError: "",
    AllPosts: [],
    count: 0,
    perPage: 0,
    createError: [],
    createSucces: [],
    details: {
        data: {
            url:"",
            public_id:"",
            image: {
                public_id: '',
                url: ''
            },
            vedio: {
                public_id: ' ',
                url: ' ',
                thumbnail_url: ' '
            },
            _id: '',
            title: '',
            description: '',
            slug: '',
            userName: '',
            userId: '',
            createdAt: '',
            updatedAt: '',
            __v: 0,
            likes: []
        },
        comment: []
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
    else if (action.type === "SET_MESSAGE")
        return { ...state, message: action.payload };
    else if (action.type === "REMOVE_MESSAGE")
        return { ...state, message: "" }
    else
        return state;
}

export default PostReducer