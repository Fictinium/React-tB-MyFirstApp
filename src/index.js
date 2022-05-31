/**
 * index.js
 * 
 * Este é o ficheiro mais importante!
 * Porque é o primeiro a ser executado...
 */

//importar as bibliotecas necessárias ao funcionamento do React
import React from 'react';
import ReactDOM from 'react-dom/client';
//importar recursos
import './index.css';
//importar os Componentes a usar neste Componente
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
