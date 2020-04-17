$(document).ready(function(){
  //Implementa o evento de click no elemento cujo
  //id é "botao".
  $("#botao").click(function() {
    //Aplica o estilo "azul" em todas as
    // divs que contiverem a palavra "azul"
    $("div:contains('azul')").addClass("azul");
    //Aplica o estilo "outraCor" em todas as
    // divs que NÃO contiverem a palavra "azul"
    $("div:not(:contains('azul'))").addClass("outraCor");
  });
});
