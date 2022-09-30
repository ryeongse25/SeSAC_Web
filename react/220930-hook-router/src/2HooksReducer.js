import {useReducer} from 'react';

// state = 현재 상태, action = 
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return {value: state.value + 1};
        case "DECREMENT":
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Reducer = () => {
    // useReducer(함수, 초기값) -> state.value = 0
    // state = reducer함수에서 업데이트 되어서 return된 state 값
    // dispatch = useReducer를 실행하고 반환된 것
    // dispatch(action) => const state = reducer()라고 이해할 수 있음
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return(
        <div>
            <h1>{state.value}</h1>
            {/* dispatch 함수 실행 */}
            <button onClick={() => {dispatch({type: "DECREMENT"})}}>-1</button>
            <button onClick={() => {dispatch({type: "INCREMENT"})}}>+1</button>
        </div>
    )
}

export default Reducer;