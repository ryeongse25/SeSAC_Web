import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Event_ex from './ex/Event_ex';
import React_ex from './ex/React_ex';
import ReactClass from './ex/ReactClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ReactClass />
    </React.StrictMode>
);