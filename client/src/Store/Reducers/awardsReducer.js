const init = {
    awards: [],
    awardeeData:[]
}
const awardsReducer = (state = init, action) => {
    if (action.type === "SET_ALL_AWARDS")
        return { ...state, awards: action.payload }
    if(action.type === "SET_AWARDEE")
        return { ...state , awardeeData : action.payload}
    else
        return state;
}

export default awardsReducer