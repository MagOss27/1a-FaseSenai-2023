function exibirNumeros() {
    let quantidade = document.getElementById("numeracaoVetor").value;
    let numeros = [];

    // Gerar uma sequência de números de 1 até a quantidade especificada
    for (let i = 1; i <= quantidade; i++) {
        numeros.push(i);
    }

    if (quantidade <= 100) {
        // Exibir os números na tela
        document.getElementById("listaNumeros").innerHTML = numeros.join(', ');
    } else {
        alert('Numeração muito grande, coloque menos!')
    }
}

function limparNumeros() {
    // Limpar o campo de entrada numeracaoVetor
    document.getElementById("numeracaoVetor").value = '';

    // Limpar a área onde os números são exibidos
    document.getElementById("listaNumeros").innerHTML = '';
}