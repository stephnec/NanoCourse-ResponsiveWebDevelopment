import React, {Component} from 'react';

/* FORMA DE CRIAR COMPONENTES
function Titulo(){
    return (
        <h1>
            Esse é meu Título
        </h1>
    )
}*/

//Outra forma de criar componentes
class Titulo extends Component{
    render(){
        return(
            <h1>
                Esse é meu Título
            </h1>
        )
    }
}
export default Titulo;