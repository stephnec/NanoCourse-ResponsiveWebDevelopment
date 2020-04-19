import React, {Component} from 'react';

//estado - característica que o componente guarda para ele mesmo
class Titulo extends Component{
    constructor(props){
        super(props);
        this.state = {
            texto: "Meu Texto Padrão"
        }
    }
    render(){
        return(
            <h1>
                {this.state.texto}
            </h1>
        )
    }
}
export default Titulo;