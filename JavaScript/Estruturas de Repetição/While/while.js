window.onload = function() {
  var divSaida = document.getElementById("saida");

//Com While, a condição irá se repetir até o momento que ela passe a ser verdadeira
//Usada quando não sabemos o número de repetições
  var i=1;
  while(i <= 10) {
	  divSaida.innerHTML += i+"<br>";
	  i++;
  }
}
