window.onload = function()
{
  var divSaida = document.getElementById("saida");

//Usada quando sabemos o número de repetições
  for(var i=1;i<=10;i++) {
	  divSaida.innerHTML += i+"<br>";
  }
}
