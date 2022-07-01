import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const pool = require('./db');

// //Routes//
// app.post("/todos", async(req, res) => {
//   try {

//     console.log

//   } catch (err) {
//     console.error(err.message);
//   }

// })

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
