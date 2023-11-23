function calcularPercentuais() {
    let numeroEleitores = parseInt(document.getElementById('numEleitores').value);
    let votoCandidatoUm = parseInt(document.getElementById('votosCandidatoUm').value);
    let votoCandidatoDois = parseInt(document.getElementById('votosCandidatoDois').value);
    let votosBranco = parseInt(document.getElementById('votosBranco').value);
    let votosNulos = parseInt(document.getElementById('votosNulos').value);

    // Verificando se os valores são números válidos
    if (isNaN(numeroEleitores) || isNaN(votoCandidatoUm) || isNaN(votoCandidatoDois) || isNaN(votosBranco) || isNaN(votosNulos)) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira valores numéricos válidos.';
        return;
    }

    let somaEleitores = votoCandidatoUm + votoCandidatoDois + votosBranco + votosNulos;
    document.getElementById('resultado').innerHTML = `A soma dos eleitores foi de ${somaEleitores} pessoas que votaram.`;

    let percentualCandidatoUm = ((votoCandidatoUm * 100) / numeroEleitores).toFixed(2);
    document.getElementById('resultado').innerHTML += `<br>O percentual de votos no Candidato Um foi de ${percentualCandidatoUm}% dos eleitores.`;

    let percentualCandidatoDois = ((votoCandidatoDois * 100) / numeroEleitores).toFixed(2);
    document.getElementById('resultado').innerHTML += `<br>O percentual de votos no Candidato Dois foi de ${percentualCandidatoDois}% dos eleitores.`;

    let percentualBranco = ((votosBranco * 100) / numeroEleitores).toFixed(2);
    document.getElementById('resultado').innerHTML += `<br>O percentual de votos em Branco foi de ${percentualBranco}% dos eleitores.`;

    let percentualNulos = ((votosNulos * 100) / numeroEleitores).toFixed(2);
    document.getElementById('resultado').innerHTML += `<br>O percentual de votos Nulos foi de ${percentualNulos}% dos eleitores.`;
}
