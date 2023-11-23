function calcularVelocidadeMedia() {

    let distancia = parseFloat(document.getElementById('distancia').value)
    let tempo = parseFloat(document.getElementById('tempo').value)

    if (isNaN(distancia) || isNaN(tempo) || tempo === 0) {
        document.getElementById('resultado').innerHTML = 'Por favor insira valores válidos para distância e o tempo.';
        return;
    }

    let velocidadeMedia = distancia / tempo
    document.getElementById('resultado').innerHTML = `A velocidade média é de ${velocidadeMedia.toFixed(2)} Km/h.`

}

//isNaN - é uma função em JavaScript que significa "Is Not a Number" (Não é um número)
//getElementById - é o método usado para selecionar um elemento com um determinado ID