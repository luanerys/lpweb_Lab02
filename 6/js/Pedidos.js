var itens_bebidas = [{
        descricao: "suco",
        preco: 4
    },
    {
        descricao: "refrigerante",
        preco: 2.5
    },
    {
        descricao: "agua",
        preco: 1.5
    }
]
var itens_comidas = [{

        descricao: "bolo",
        preco: 3.5
    },
    {
        descricao: "pastel",
        preco: 3
    },
    {
        descricao: "torta",
        preco: 4
    }
]

function calcularConta() {

    let nome = document.querySelector("#nome").value;

    let bebida = document.querySelector("input[name = bebida]:checked");



    let doce_salgado = document.querySelectorAll("input[name = docesESalgados]:checked");



    let i, j;
    var total = 0;
    var totalBebida = 0;
    var totalComida = 0.0;
    for (i = 0; i < itens_bebidas.length; i++) {
        if (itens_bebidas[i].descricao == bebida.value)
            totalBebida += itens_bebidas[i].preco;

    }


    for (j = 0; j < itens_comidas.length; j++) {
        if (itens_comidas[j].descricao == doce_salgado[j]) {
            totalComida += itens_comidas[j].preco;
        }
    }

    total = totalComida + totalBebida;




    alert("Cliente: " + nome + "  Bebida: " + bebida + "Doces e Salgados: " + doce_salgado + "  Total a pagar: " + total);

}