import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

type State = {
    money: number
}

function App() {
    const money = useSelector((state:State) => state.money);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>코딩온 은행</h1>
            <h3>잔액 : {money}원</h3>
            <Button />
        </div>
    );
}

const Button = () => {

    const input = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    function deposit() {
        if (input.current != null) dispatch({type: "DEPOSIT", amount: input.current.value});
    }

    function withdraw() {
        if (input.current != null) dispatch({type: "WITHDRAW", amount: input.current.value});
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="text" ref={input} />
            <button onClick={deposit}>입금</button>
            <button onClick={withdraw}>출금</button>
        </div>
    )
}


export default App;
