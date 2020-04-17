window.onload = function()
{
  var divSaida = document.getElementById("saida");

//Com Do While ela se repete obrigatóriamente no mínimo uma vez.
  var i=1;
  do {
	  divSaida.innerHTML += i+"<br>";
	  i++;
  } while(i > 10); //A condição é falsa, logo de início.
}
