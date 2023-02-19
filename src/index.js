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
    <App proping="Hello World" />
    <MeSirve title="This is the title" aux="This is the aux text"/>  
    <CounterApp value={55} />
   
  </React.StrictMode>
);

reportWebVitals();
