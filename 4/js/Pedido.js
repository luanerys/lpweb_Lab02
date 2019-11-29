var produto1 = { descricao: "Cachorro quente", codigo: "100", preco: "1.2" };
var produto2 = { descricao: "Bauru simples", codigo: "101", preco: "1.3" };
var produto3 = { descricao: "Bauru com ovo", codigo: "103", preco: "1.5" };
var produto4 = { descricao: "Hamburguer", codigo: "104", preco: "1.2" };
var produto5 = { descricao: "Cheeseburger", codigo: "105", preco: "1.3" };
var produto6 = { descricao: "Refrigerante", codigo: "106", preco: "1" };

function calculaTotal() {

    var produto = document.getElementById("codigo").value;
    var quantidade = document.getElementById("quantidade").value;

    var total = produto * quantidade;



    document.getElementById("resposta").innerHTML = total;

}