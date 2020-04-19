import React, { Component } from 'react';
class Produto extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      preco: "",
      quantidade: ""
    }
    this.adicionar = this.adicionar.bind(this);
    this.atualiza = this.atualiza.bind(this);
    this.nome = React.createRef();
    this.preco = React.createRef();
    this.quantidade = React.createRef();
  }
  atualiza(){
    if(isNaN(this.preco.current.value)){
      alert("Valor inválido para o campo Preço");
      this.preco.current.value="";
    }
    if(isNaN(this.quantidade.current.value) || 
      this.quantidade.current.value.indexOf(".") >= 0){
      alert("Valor inválido para o campo Quantidade");
      this.quantidade.current.value="";
    }
    this.setState(
      {
        nome: this.nome.current.value,
        preco: parseFloat(this.preco.current.value),
        quantidade: parseFloat(this.quantidade.current.value)
      }
    );
  }
  adicionar(){
    if(this.props.evtAdicionar){
      this.props.evtAdicionar(this.state);
    }
    this.nome.current.value = "";
    this.preco.current.value = "";
    this.quantidade.current.value = "";
    this.setState({
      nome:  "",
      preco:  "",
      quantidade:  "",
    });
  }
  render() {
    return (
      <div>
        <label for="nome">Nome:</label> <input ref={this.nome} type="text" value={this.props.nome} onChange={this.atualiza} /><br/>
        <label for="nome">Preço:</label> <input ref={this.preco} type="text" value={this.props.preco}  onChange={this.atualiza}/><br/>
        <label for="nome">Quantidade:</label> <input ref={this.quantidade} type="text" value={this.props.quantidade}  onChange={this.atualiza}/> <br/>
        <input class="botao" type="button" value="Adicionar" onClick={this.adicionar}/>
      </div>
    );
  }
}
export default Produto;