const init = {
    updateNameSucces: "",
    updateNameError: [],
    updatePasswordSucces:"",
    updatePasswordError:[]
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
    else if (action.type === "RESET_UPDATEPASSWORDSUCESS")
        return { ...state, updatePasswordSucces:""}
    else
        return state;
}

export default updateReducer