function calcularIdade() {
    let anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    let anoAtual = parseInt(document.getElementById('anoAtual').value);

    let idadeAnos = anoAtual - anoNascimento;
    document.getElementById('resultado').innerHTML = `A sua Idade é de ${idadeAnos} Anos.<br>`;

    let idadeMeses = idadeAnos * 12;
    document.getElementById('resultado').innerHTML += `A sua Idade em Meses é de ${idadeMeses} Meses.<br>`;

    let idadeSemanas = idadeAnos * 52;
    document.getElementById('resultado').innerHTML += `A sua Idade em Semanas é de ${idadeSemanas} Semanas.<br>`;

    let idadeDias = idadeAnos * 365;
    document.getElementById('resultado').innerHTML += `A sua Idade em Dias é de ${idadeDias} Dias.`;
}
