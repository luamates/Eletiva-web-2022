var prods = [
    { id: 1, name: "Produto 1", price: 30.0 },
    { id: 2, name: "Produto 2", price: 25.0 },
    { id: 3, name: "Produto 2", price: 22.0 },
    { id: 4, name: "Produto 2", price: 10.0 },
    { id: 5, name: "Produto 2", price: 8.0 },
    { id: 6, name: "Produto 2", price: 12.0 },
];

function calc(){

       
    saida.innerHTML = '';
    var quantities = document.getElementsByName("quantity");
    
    for (let input of quantities) {
        saida.innerHTML += ` Produto: ${prods[input.id-1].name}  - Preço: ${prods[input.id-1].price} - Quantidade: ${input.value} </br>`
    }

    
}

