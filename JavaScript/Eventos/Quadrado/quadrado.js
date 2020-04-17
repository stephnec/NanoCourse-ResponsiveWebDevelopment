window.onload = function()
{
  var quadrado = document.getElementById("quadrado");

  //Pinta o fundo de verde quando o ponteiro do mouse passar por cima
  quadrado.onmouseover = function(){
    quadrado.style.backgroundColor = "#008000";
  }

  //Restaurar a cor original quando o ponteiro sair
  quadrado.onmouseout = function(){
    quadrado.style.backgroundColor = "";
  }
}
