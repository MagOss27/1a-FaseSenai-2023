function calcularValor() {
    let numeroBase = document.getElementById("numeroBase").value;
    let numeroExpoente = document.getElementById("numeroExpoente").value;
    
    let resultado = Math.pow(numeroBase, numeroExpoente);

    document.getElementById("resultado").innerText = `O Resultado da exponenciação foi: ${resultado}`;

    // Adicionando os resultados na tabela
    let tabela = document.getElementById("tabelaResultados");
    let corpoTabela = document.getElementById("corpoTabela");
    
    // Criando uma nova linha na tabela
    let novaLinha = corpoTabela.insertRow();
    let celulaBase = novaLinha.insertCell(0);
    let celulaExpoente = novaLinha.insertCell(1);
    let celulaResultado = novaLinha.insertCell(2);
    
    // Preenchendo as células com os valores
    celulaBase.innerText = numeroBase;
    celulaExpoente.innerText = numeroExpoente;
    celulaResultado.innerText = resultado;
}
