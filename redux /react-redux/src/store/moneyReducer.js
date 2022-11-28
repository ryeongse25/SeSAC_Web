function moneyReducer(state = {money: 0}, action) {
    if (action.type === "DEPOSIT") return { money : state.money + Number(action.amount) };
    if (action.type === "WITHDRAW") return { money : state.money - Number(action.amount) };
    return state;
}

export default moneyReducer;

