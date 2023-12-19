function verificarPrimo() {
    let numero = parseInt(document.getElementById('numeroPrimo').value);
    let cont = 2;
    let flag = false;

    if (numero < 1) {
        alert('Número inválido. Digite um número maior ou igual a 1 para verificar se é primo.');
        return;
    }

    if (numero === 1) {
        alert('1 não é considerado um número primo.');
        return;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            flag = true;
            break;
        }
    }

    if (flag) {
        alert(`${numero} -> Não é um número primo.`);
    } else {
        alert(`${numero} -> É um número primo.`);
    }
}
