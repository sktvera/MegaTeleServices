import React from "react";
import { Component } from "react";

class Nuevo extends Component{
    constructor(props){
        super(props);
        this.state={
            edad:22
        }
    }
    
    render(){
        return(
            <div>
                <p>
                    la edad es de {this.state.edad}
                </p>
                <button onClick={this.sumarCronologia} >aumentar edad </button>
                <button onClick={this.RestaCronologia} >mermar edad </button>
            </div>
        )
    }
    sumarCronologia=()=> {
        this.setState((prevState)=>(
                {
                        edad : prevState.edad + 1
             }
        ) )
        
    }
    
    RestaCronologia=()=> {
        this.setState((prevState)=>(
                {
                        edad : prevState.edad - 1
             }
        ) )
        
    }
 

}

export default Nuevo