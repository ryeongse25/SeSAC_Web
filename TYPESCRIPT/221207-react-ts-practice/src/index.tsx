import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

type State = {
    money: number
}

type Action = {
    type: string,
    amount: string
}

function reducer(state:State={money: 0}, action:Action) {
    if (action.type == "DEPOSIT") return {money: state.money + Number(action.amount)};
    else if (action.type == "WITHDRAW") return {money: state.money - Number(action.amount)};
    return state;
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
