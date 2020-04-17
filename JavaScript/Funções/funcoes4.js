function soma(num1, num2)
{
  return num1+num2;
}

window.onload = function()
{
  botao = document.getElementById("botao");
  botao.onclick = function(){
    txtNum1 = document.getElementById("num1");
	txtNum2 = document.getElementById("num2");
    resultado = document.getElementById("resultado");
    resultado.innerHTML += soma(
	parseInt(txtNum1.value),
	parseInt(txtNum2.value) ) + "<br>";
  }
}
