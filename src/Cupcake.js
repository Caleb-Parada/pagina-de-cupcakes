import React from "react";

class Cupcake extends React.Component{   //si queremos destructurizar entonces seria linea 1 import {Component} from "react" y en la liena 3 despues del extends solo pone Component
render(){
    return(
            //aqui esta escrito en forma de clase
            //toca poner this.props para que accedea directamente a la ruta de foto
        <div className="Cupcake">
            <img src={this.props.foto} alt={this.props.sabor} />
            <h2>{this.props.color}</h2>
             
            <p>{"Precio:"}{this.props.precio}</p>
            <p>{'Sabor:'}{this.props.sabor}</p>

        
           



        </div>
        
    )
}

}

export default Cupcake

//este iva en la linea 11 <h3>{this.props.precio}</h3>



//Aqui se puede usar en forma de funcion






/*function Cupcake(props){
    //console.log(props)    //Console.log es para hacerlo de una forma mas dinamica
    return (              //Aqui podemos Crear una clase en la liena 4 antes de > del <divclassName="cupCake">  y comentamos el console.log linea 2"
        <div className="cupCake"> 
            <img src={props.foto} alt={props.sabor}/>            
            <h2>{props.color}</h2>
            <p>{'Sabor:'} {props.sabor}</p>


        </div>
    )
}
export default Cupcake*/
