var produtos = [{
        descricao: "Cachorro quente",
        codigo: 100,
        preco: 1.2
    },
    {
        descricao: "Bauru simples",
        codigo: 101,
        preco: 1.3
    },
    {
        descricao: "Bauru com ovo",
        codigo: "103",
        preco: 1.5
    },
    {
        descricao: "Hamburguer",
        codigo: 104,
        preco: "1.2"
    },
    {
        descricao: "Cheeseburger",
        codigo: 105,
        preco: 1.3
    },
    {
        descricao: "Refrigerante",
        codigo: 106,
        preco: 1
    }
]

function calcularTotal() {

    var codigo = document.querySelector("#codigo").value;
    var quantidade = document.querySelector("#quantidade").value;

    var total;

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].codigo == codigo)
            total = produtos[i].preco * quantidade;
    }

    document.querySelector("#resposta").innerHTML = "Total a pagar: " + total;

}
s