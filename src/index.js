import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import Mount from './Mount';
//import Update from './Update';
//import ToDo from './ToDo';
import Tests from "./Tests";
import FunctionalC from "./FunctionalC";


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //<React.StrictMode>
    
    <Tests />,

 // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
