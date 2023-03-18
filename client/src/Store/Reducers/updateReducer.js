const init = {
    updateName: [],
    updateNameError: [],
}
const updateReducer = (state = init, action) => {
    if (action.type === "SET_UPDATENAMEERROR")
        return { ...state, updateNameError: action.payload }
    else if (action.type === "RESET_UPDATENAMEERROR")
        return { ...state, updateNameError: [] }
    else if (action.type === "SET_UPDATENAMESUCESS")
        return { ...state, updateName: action.payload }
    else if (action.type === "RESET_UPDATENAMESUCESS")
        return { ...state, updateName:[]}
    else
        return state;
}

export default updateReducer