function calcularMedia() {

    let pesoAtividadeIndi = 1;
    let pesoSeminario = 1;
    let pesoProjetoFinal = 3;

    let notaAtividadeIndi = parseFloat(document.getElementById('notaUm').value);
    let notaSeminario = parseFloat(document.getElementById('notaDois').value);
    let notaProjetoFinal = parseFloat(document.getElementById('notaTres').value);

    let mediaPontos =
        (notaAtividadeIndi * pesoAtividadeIndi +
        notaSeminario * pesoSeminario +
        notaProjetoFinal * pesoProjetoFinal) /
        (pesoAtividadeIndi + pesoSeminario + pesoProjetoFinal);

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = `Média das notas: ${mediaPontos.toFixed(2)} Pontos.`;
    
}
