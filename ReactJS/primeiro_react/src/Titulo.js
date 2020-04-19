import React, {Component} from 'react';

//ref - referência feita para componentes ou elementos html
class Titulo extends Component{
    constructor(props){
        super(props);
        this.elementoH1 = React.createRef();
    }

    componentDidMount(){
        this.elementoH1.current.innerHTML = "Outro Texto";
    }

    render(){
        return(
            <h1 ref={this.elementoH1}>
                Texto de Exemplo
            </h1>
        )
    }
}
export default Titulo;