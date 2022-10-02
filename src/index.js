import React from 'react';      //Esta linea es fundamental para que funcione la aplicacion
import ReactDOM from 'react-dom';     //esta tambien es fundamental para que corra la aplicacion
//import './index.css';  //Este tambien se omite para que el curso sea mas entendible ok
import App from './App';
//import reportWebVitals from './reportWebVitals'; //esto tambien se omite para el curso bueno

//Bueno React.StrictMode es un componente que viene ya con la libreria de React y nos permite poder visualizar
//de forma mas conveniente advertencias errores o avisos de cosas que estemos utilizando mal en React
//Es de Gran ayudad usarlo pero no es un requisito usarlo bueno
//Nuestra aplicacion esta en App alli se va hacer las modificaciones eso creo
ReactDOM.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); //esto se omite para el curso ok

/*
Para poder destructurizar el codigo de la linea 11 a la 13 seria asi 
import React,{StrictMode} from 'react';      //Esta linea es fundamental para que funcione la aplicacion
import ReactDOM from 'react-dom';     //esta tambien es fundamental para que corra la aplicacion
//import './index.css';  //Este tambien se omite para que el curso sea mas entendible ok
import App from './App';



ReactDOM.render(
  <StrictMode>  
    <App />
  </StrictMode>,
  document.getElementById('root')
);

Al hacer lo que se hizo en la linea 24,32 y 34, entonces ya no se necesitaria React en el import
si quieres haz la prueba comenta las otrass lineas ok no va a pasar nada
*/


/*
NOTICIA ACERCA DEL IMPORT REACT
Entonces ya sabemos que en todos los archivos vamos a usar import react
pero los desarrolladores dijeron ya sabemos que es de react 
entonces apartir de la version 17v ya no se necesita hacer el import react
esto solo aplicac para programacion funcional
*/