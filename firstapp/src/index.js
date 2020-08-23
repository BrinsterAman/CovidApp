import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// let currTime = new Date().getHours();
// let greetings = '';

// if(currTime>=1 && currTime<12){
//   greetings = 'Good Morning'
// } else if(currTime>=12 && currTime<19) {
//   greetings = 'Good Afternoon'
// } else {
//   greetings = 'Good Night'
// }

// ReactDOM.render(
//   <h1>Hello Sir!!, {greetings}</h1>
//   ,document.getElementById('root')
// );


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
