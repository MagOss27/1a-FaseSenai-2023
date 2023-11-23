function calcularTemperatura() {
    let temperaturaCelsius = parseFloat(document.getElementById('inputTemperatura').value);
    let resultadoElement = document.getElementById('resultado');
    
    if (isNaN(temperaturaCelsius)) {
        resultadoElement.textContent = 'Por favor, insira uma temperatura válida.';
        return;
    }

    let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    resultadoElement.textContent = `A temperatura em Fahrenheit é: ${temperaturaFahrenheit.toFixed(2)} °F`;
}
