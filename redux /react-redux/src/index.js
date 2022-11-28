import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import PracticeDefault from './PracticeDefault';
import rootReducer from './store/rootReducer';

// function reducer(state, action) {
//     if (action.type == "INCREASE") return {number: state.number + 1};
//     else if (action.type == "DECREASE") return {number: state.number -1};
//     return { number : 1};
// }

const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            {/* <App /> */}
            <PracticeDefault />
        </Provider>
    </>
);