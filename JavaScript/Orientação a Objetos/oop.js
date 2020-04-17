//Classe Carro e seus atributos
Carro = {

  placa: "", // placa do carro
  marca: "", // marca do carro
  modelo: "",  // modelo do carro
  cor: "" // cor do carro
}

//Construtor da classe Carro
var Carro = function(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}
//método dinâmico locomover()
Carro.prototype.locomover = function() {
  document.write("O carro "+this.marca+" "+this.modelo+" está em movimento.");
}

window.onload = function() {
  //Instanciação do objeto Carro usando o construtor
  //o primeiro parâmetro é a marca, o segundo é o modelo
  var meuCarro = new Carro("Ferrari", "Testarossa");

  //Atribuindo valor para alguns atributos
  meuCarro.placa = "BOM-0001";
  meuCarro.cor = "vermelha";

  //Chamada do método locomover()
  meuCarro.locomover();
}
