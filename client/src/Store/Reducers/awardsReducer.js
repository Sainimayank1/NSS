const init = {
    awards: [],
}
const awardsReducer = (state = init, action) => {
    if (action.type === "SET_ALL_AWARDS")
        return { ...state, awards: action.payload }
    else
        return state;
}

export default awardsReducer