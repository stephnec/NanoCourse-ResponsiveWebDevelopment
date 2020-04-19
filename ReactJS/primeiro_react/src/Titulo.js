import React, {Component} from 'react';

//evento - declaração do que deve ser feito quando algo acontece
class Titulo extends Component{
    constructor(props){
        super(props);
    }
    funcao(){
        alert("Você clicou no botão :D");
    }
    render(){
        return(
            <button onClick={this.funcao}>
                <h1>Clique Aqui!!</h1>  
            </button>
        )
    }
}
export default Titulo;