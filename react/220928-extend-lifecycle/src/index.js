import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Practice62 from './Practice62';
import Ref from './Ref';
import ScrollBox from './ScrollBox';
import LifeCycle from './LifeCycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollBox />
    <LifeCycle />
  </React.StrictMode>
);