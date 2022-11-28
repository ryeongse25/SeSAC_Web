const counterReducer = (state, action) => {
    console.log( action );
    if (action.type === "INCREASE") return {count : state.count + 1};
    return {count : 0}
}

export default counterReducer;