import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Provider로 안 감싸져있는 App에서는 useSelector를 쓸 수 없다 -> index.js에서 App을 감싸줘야함
function App() {
    // 일반 js에서의 getState 역할
    return (
        // state를 불러올 가장 최상위를 Provider로 감싸준다
        <div id="app">
            <h1>number : </h1>
            <Box1/>
        </div>
    );
}

const Box1 = (props) =>{
    // 일반 js에서의 getState 역할
    const number = useSelector((state) => state.number);
    console.log('Box1');
    return (
        <div>
            <h2>Box1 컴포넌트 number : {number}</h2>
            <Box2/>
        </div>
    )
}

const Box2 = (props) =>{
    const number = useSelector((state) => state.number);
    console.log('Box2');
    return (
        <div>
            <h3>Box2 컴포넌트 number : {number}</h3>
            <Box3/>
        </div>
    )
}
const Box3 = (props) =>{
    console.log('Box3');
    const number = useSelector((state) => state.number);
    const dispatch = useDispatch();
    return (
        <div>
            <h4>Box3 컴포넌트 number : { number }</h4>
            <input type="button" value="+" onClick={() => {dispatch({type: 'INCREASE'})}}/>
            <input type="button" value="-" onClick={() => {dispatch({type: 'DECREASE'})}}/>
        </div>
    )
    }

export default App;
