var palavras = [];

//palavras.forEach(invertePalavras);

function invertePalavras() {

    var i, resultado = "";

    palavras = document.getElementById("form1");

    //palavras.reverse();

    for (i = palavras.length - 1; i >= 0; i--) {
        resultado += palavras.elements[i].value + " | ";

        document.getElementById("resposta").innerHTML = resultado;
    }
}