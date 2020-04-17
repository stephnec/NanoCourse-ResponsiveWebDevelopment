$(document).ready(function() {
  //quadrado começa invisível
  $("#quadrado").hide();
  //quando o mouse passar pelo alvo, mostra quadrado
  $("#alvo").mouseover(function(){
    $("#quadrado").slideToggle("fast"); //determina a velocidade com que a funcção acontece
  });
  //quando o mouse sair do alvo, some com o quadrado
  $("#alvo").mouseout(function(){
    $("#quadrado").slideToggle("slow");
  });
});
