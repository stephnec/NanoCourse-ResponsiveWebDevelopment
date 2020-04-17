window.onload = function()
{
  //Declaração de array com 5 elementos.
  var arrayLinguagens = ["JavaScript", "Java", "PHP", "Python"];

  var divSaida = document.getElementById("saida");
  //Estrutura for..of
  //Para cada elemento do array... Fazer tal coisa.
  for(elemLinguagem of arrayLinguagens) {
	  divSaida.innerHTML += elemLinguagem+"<br>";
  }
}
