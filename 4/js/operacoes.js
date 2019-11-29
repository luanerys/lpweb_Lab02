var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];

//meses.forEach(dataPorExtenso);

function dataPorExtenso() {

    /*var dia = data.getDay();
    var mes = data.getMonth();
    var ano = data.getYear();
    var dataExtenso = dia + " de " + mes + " de " + ano;*/

    var data = document.getElementById("data1").value;
    var mes = meses[data.getMonth()];
    var resultado = data.split("-").reverse().join(" de ");

    document.getElementById("resposta").innerHTML = resultado + mes;

}