import React, {Component} from 'react';

//prop é a maneira com que o React recebe dados de entrada para um componente.
class Titulo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>
                {this.props.texto}
            </h1>
        )
    }
}
export default Titulo;