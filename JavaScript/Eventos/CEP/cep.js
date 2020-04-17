window.onload = function()
{
  var txtCep    = document.getElementById("cep");
  var msgCep = document.getElementById("msgCep");

  //Disparado quando o campo de CEP perder o foco.
  txtCep.onblur = function(){
    /* Expressões Regulares -> O padrão ^[0-9]{5}-[0-9]{3}$ significa que os cinco primeiros caracteres são dígitos entre 0 e 9, o sexto caractere é, obrigatoriamente, uma barra ou hífen (“-“) e os três caracteres seguintes  são outros três dígitos válidos, ou seja, um padrão de CEP, com sua máscara.*/
    var oRegExp = new RegExp("^[0-9]{5}\-[0-9]{3}$");
      if (oRegExp.test(txtCep.value) == true) {
        txtCep.style.borderColor = "#008000";
        msgCep.style.color = "#008000";
        msgCep.innerHTML = "Campo preenchido com sucesso!";
      } else {
        txtCep.style.borderColor = "#FF0000";
        msgCep.style.color = "#FF0000";
        msgCep.innerHTML = "CEP inválido! Informe novamente!";
      }
  }

  //"Limpar"
  txtCep.onfocus = function(){
    txtCep.style.borderColor = "";
    msgCep.style.color = "";
    msgCep.innerHTML = "";
  }
}
