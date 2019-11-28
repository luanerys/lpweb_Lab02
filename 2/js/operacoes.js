var idades = [];

function calculaMaioridade() {
    var i, resultado, maior = 0,
        menor = 0;

    idades[0] = document.getElementById("primeira_idade").value;
    idades[1] = document.getElementById("segunda_idade").value;
    idades[2] = document.getElementById("terceira_idade").value;

    for (i = 0; i < idades.length; i++) {

        if (isNaN(idades[i]) || idades[i] < 1) {

            resultado = "Idade inválida!  ";

        } else if (idades[i] >= 18) {
            maior++;
        } else {
            menor++;
        }
    }
    document.getElementById("resposta").innerHTML = ("Total maioridade: " + maior + " <br><br>Total menoridade: " + menor);
}