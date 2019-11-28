var numeros = [],
    resultados = [];

numeros.forEach(calculaQuadrado);

function calculaQuadrado() {
    var i;

    numeros[0] = document.getElementById("primeiro_numero").value;
    numeros[1] = document.getElementById("segundo_numero").value;
    numeros[2] = document.getElementById("terceiro_numero").value;
    numeros[3] = document.getElementById("quarto_numero").value;
    numeros[4] = document.getElementById("quinto_numero").value;

    for (i = 0; i < numeros.length; i++) {

        if (isNaN(numeros[i]) || numeros[i] < 1) {
            resultados = "Esse número não é válido!";
        } else {
            resultados += Math.pow(numeros[i], 2) + " | ";
        }
    }

    document.getElementById("resposta").innerHTML = resultados;
}