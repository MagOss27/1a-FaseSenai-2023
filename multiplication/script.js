function calcular() {
    const num1 = parseFloat(document.getElementById('numeroUm').value);
    const num2 = parseFloat(document.getElementById('numeroDois').value);
    const num3 = parseFloat(document.getElementById('numeroTres').value);
  
    const soma = num1 + num2 + num3;
    const multiplicacao = num1 * num2 * num3;

    document.getElementById('soma').textContent = `Soma: ${soma}`;
    document.getElementById('multiplicacao').textContent = `Multiplicação: ${multiplicacao}`;
  }
  