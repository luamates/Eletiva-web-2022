var prods = [{
        id: 1,
        name: "Bife com batatas"
    },
    {
        id: 2,
        name: "Coxa de frango crocante"
    },
    {
        id: 3,
        name: "Carne de panela"
    },
    {
        id: 4,
        name: "Farofa"
    },
    {
        id: 5,
        name: "Salada"
    },
    {
        id: 6,
        name: "Torresmo"
    },
];

var thePrices = [30, 25, 22, 10, 8, 12]

function start() {
    saida.innerHTML = '';

    var customerName, customerNumber, customerEmail;

    customerName = document.getElementById('customerName').value
    customerNumber = document.getElementById('phone').value
    customerEmail = document.getElementById('email').value

    if (customerName == "" || customerNumber == "" || customerEmail == "") {
        alert("Por favor, insira todos os dados.");
    } else {
        saida.innerHTML += "Caro <b>" + customerName + "</b><br><br> Seguem os dados do seu pedido. <br><br> O seu pedido é: <br><br>"
        var finalPrice = 0

        for (i = 0; i < 6; i++) {
            idBYi = i + 1;
            quant = document.getElementById(idBYi).value

            if (quant != 0) {
                var totalPrice = thePrices[i] * quant
                finalPrice += totalPrice;

                saida.innerHTML += "<li>Prato: " + prods[i].name + " - Preço unitário: R$ " + thePrices[i] + ",00 - Quantidade: " + quant + " - Total: R$ " + totalPrice + ",00";
            }
        }
        saida.innerHTML += "<br><br><b>Preço final R$ " + finalPrice + ",00<b>";
    }
}