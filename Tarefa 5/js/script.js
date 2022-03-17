var prods = [
    { id: 1, name: "Bife com batatas", price: 30.0 },
    { id: 2, name: "Coxa de frango crocante", price: 25.0 },
    { id: 3, name: "Carne de panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){ 

       
    saida.innerHTML = '';
    var quantities = document.getElementsByName("quantity");
    
   
        alert(document.getElementById('customerName').value)

        let cliNome = document.getElementById('customerName').value

        saida.innerHTML += "Caro <b>" + cliNome + "</b><br><br> Seguem os dados do seu pedido. <br><br> O seu pedido é: <br><br>"

        for (let input of quantities) {
            saida.innerHTML += ` Produto: ${prods[input.id-1].name}  - Preço: ${prods[input.id-1].price} - Quantidade: ${input.value} </br>`
        }
    



    
}

