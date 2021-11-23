import React from 'react';
import './Prueba.css';

function Prueba(props){
    return(
        <main className = "cuerpo">
            <div className = "nombre">
                <img className = "imagenes" src={props.imagen} alt="" width ="500 px" />
                <p className = "parrafo">Nombre: {props.nombre}</p>
                <p className = "parrafo2">Edad: {props.edad} </p>
            </div>
        </main>
    )
}
const PER = [


{    
     id:1,
     nombre:"Mario",
     edad:"25",
     imagen: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg" 
},

{     
    id:2,
    nombre:"Maria",
    edad:"27",
    imagen: "https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726__340.jpg" 
},

{   
    id:3,
    nombre:"Romina",
    edad:"24",
    imagen: "https://cdn.pixabay.com/photo/2016/11/23/17/25/woman-1853939__340.jpg" 
},

{  
    id:4,
    nombre:"Paula",
    edad:"26",
    imagen:"https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg" 
},
{
    id:5,
    nombre:"Ivana",
    edad:"39",
    imagen:"https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg"
}
    
]

export default function App(){
    return(
        <div className = "tituloparte2">
            <h1 className="titulo"> REPARTIDO 1 </h1>
            <Lista array= {PER} />
        </div>
    )}
function Lista(datos){
    return(
    <>
            {datos.array.map((personas)=>{
             const {nombre,imagen,id,edad} = personas;
             return(
                  <Prueba nombre={nombre} imagen=
                  {imagen} key={id} edad={edad}/>
                   )
        })}
    </>
    )
}
