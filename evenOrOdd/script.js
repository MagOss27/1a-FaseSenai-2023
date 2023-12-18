function Verificar() {

    let numeroPar = document.getElementById('numeroPar').value;
    let resultado = document.getElementById('resultado');

    if (numeroPar % 2 === 0 && numeroPar !== '') {
        resultado.textContent = 'O número é par.';
        resultado.style.display = 'block'; // Mostrar o resultado
    } else {
        resultado.textContent = 'O número é Ímpar.';
        resultado.style.display = 'block'; // Ocultar o resultado se não for par ou vazio
    }
    
}

