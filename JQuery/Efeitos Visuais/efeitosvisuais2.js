$(document).ready(function() {
  $("#quadrado").mouseover(function(){
    /*Método animate() permite algumas alterações em certas
    propriedades do css, dando um efeito de transição "morph"*/
    $("#quadrado").animate({width: "200px",
	                       height: "200px"});
  });
  $("#quadrado").mouseout(function(){
    $("#quadrado").animate({width: "100px",
	                       height: "100px"});
  });
});
