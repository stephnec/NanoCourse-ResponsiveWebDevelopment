//Declaração da função helloWorld()
function helloWorld()
{
  resultado = document.getElementById("resultado");
  resultado.innerHTML += "Hello World!<br>";
}

window.onload = function()
{
  botao = document.getElementById("botao");
  botao.onclick = function(){
	//Chamada da função helloWorld()
    helloWorld();
  }
}
