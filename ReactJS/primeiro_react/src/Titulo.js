import React, {Component} from 'react';

//evento - declaração do que deve ser feito quando algo acontece
class Titulo extends Component{
    constructor(props){
        super(props);
        this.state = {texto: "Clique Aqui"}
        this.funcao = this.funcao.bind(this);
    }
    funcao(){
        this.setState({texto: "você clicou no botão ;D"})
    }
    render(){
        return(
            <button onClick={this.funcao}>
                <h1>{this.state.texto}</h1>  
            </button>
        )
    }
}
export default Titulo;