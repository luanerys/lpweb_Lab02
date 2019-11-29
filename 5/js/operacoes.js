var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function formatarData() {

    var data = document.getElementById("data1").value;

    var dataFormatada = data.replace(/(\d{2})(\/)(\d{2})/, "$3$2$1");

    var novaData = new Date(dataFormatada);

    console.log(novaData.getDate() + ' de ' + meses[novaData.getMonth()] + ' de ' + novaData.getFullYear());

}