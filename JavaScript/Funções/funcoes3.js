//Declaração da função soma()
function soma(num1, num2)
{
  return num1+num2;
}

window.onload = function()
{
  botao = document.getElementById("botao");
  botao.onclick = function(){
    //Chamadas da função soma()
    resultado = document.getElementById("resultado");
    resultado.innerHTML += soma(soma(3, 5), 8) + "<br>";
  }
}
