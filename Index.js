import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import Prueba from './Prueba'
import './Prueba.css';


ReactDOM.render(
  <React.StrictMode>
    <Prueba nombre="Atardecer" imagen="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"/>
  </React.StrictMode>,
  document.getElementById('root')
);
