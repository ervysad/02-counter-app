import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//import components
import { MeSirve } from './MeSirve';
import App from './App';
import { CounterApp } from './CounterApp';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MeSirve title="This is the title" aux="This is the aux text"/>  
    <CounterApp value={55} />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
