var numeros = [],
    resultados = [];

numeros.forEach(calculaQuadrado);

function calculaQuadrado() {

    numeros[0] = document.getElementById("primeiro_numero").value;
    numeros[1] = document.getElementById("segundo_numero").value;
    numeros[2] = document.getElementById("terceiro_numero").value;
    numeros[3] = document.getElementById("quarto_numero").value;
    numeros[4] = document.getElementById("quinto_numero").value;

    if (isNaN(numeros[0]) || numeros[0] < 1) {
        resultados = "Esse número não é válido!";
    } else {
        resultados = Math.pow(numeros[0], 2);
    }

    //resultados = Math.pow(numeros[0], 2);

    document.getElementById("resposta").innerHTML = resultados.join(" | ");
}