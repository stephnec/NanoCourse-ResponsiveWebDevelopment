//Declaração da função soma()
function soma(num1, num2)
{
  resultado = document.getElementById("resultado");
  resultado.innerHTML += (num1+num2) + "<br>";
}

window.onload = function()
{
  botao = document.getElementById("botao");
  botao.onclick = function(){
    //Chamada da função soma()
    soma(3, 5);
  }
}
