var suco = 4,
    refrigerante = 2.5,
    agua = 1.5,
    bolo = 3.5,
    pastel = 3,
    torta = 4;

function calcularConta() {

    var nome = document.getElementById("nome").value;

    var bebida = document.getElementsByName("radios");
    for (var i = 0; i < bebida.length; i++) {   
        if (bebida[i].checked) {    
            return bebida[i].value;   
        }
    }

    var doce_salgado = document.getElementByName("check").checked = true;

    alert("Cliente: " + nome + "  Bebida: " + bebida + "Doces e Salgados: " + doce_salgado + "  Total a pagar: ")

}