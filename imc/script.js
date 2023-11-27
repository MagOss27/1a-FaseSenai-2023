function calcularIMC() {

    let altura = parseFloat(document.getElementById('alturaInput').value);
    let peso = parseFloat(document.getElementById('pesoInput').value);

    let imc = peso / (altura * altura);

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = `Seu IMC é: ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        resultadoElement.innerText += ' - IMC Baixo (Abaixo do Peso)';
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultadoElement.innerText += ' - IMC Médio (Peso Normal)';
    } else if (imc >= 25.0 && imc <= 29.9) {
        resultadoElement.innerText += ' - IMC Alto (Sobrepeso)';
    } else if (imc >= 30.0 && imc <= 34.9) {
        resultadoElement.innerText += ' - IMC Muito Alto (Obesidade Grau I)';
    } else if (imc >= 35.0 && imc <= 39.9) {
        resultadoElement.innerText += ' - IMC Muito Alto (Obesidade Grau II)';
    } else {
        resultadoElement.innerText += ' - IMC Extremamente Alto (Obesidade Mórbida - Grau III)';
    }
}
