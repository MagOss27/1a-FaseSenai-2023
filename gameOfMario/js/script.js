// Seleciona o elemento HTML com a classe 'mario'
const mario = document.querySelector('.mario');

// Seleciona o elemento HTML com a classe 'pipe'
const pipe = document.querySelector('.pipe');

// Cria um novo elemento 'div' para exibir a distância percorrida
const distanceDisplay = document.createElement('div');

// Inicializa a variável para armazenar a distância percorrida
let distanceTraveled = 0;

// Adiciona a classe 'distance-display' ao elemento criado para exibir a distância
distanceDisplay.classList.add('distance-display');

// Define o texto inicial para exibir a distância como 'Distância: 0m'
distanceDisplay.innerText = 'Distância: 0m';

// Adiciona o elemento de exibição da distância ao elemento com a classe 'game-board'
document.querySelector('.game-board').appendChild(distanceDisplay);

// Função que define o salto do personagem Mario
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// Loop principal do jogo, que executa a cada 10 milissegundos
const loop = setInterval(() => {
    // Obtém a posição horizontal do elemento 'pipe'
    const pipePosition = pipe.offsetLeft;

    // Obtém a posição vertical do elemento 'mario'
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Incrementa a distância percorrida pelo Mario
    distanceTraveled++;

    // Atualiza o texto da exibição da distância
    distanceDisplay.innerText = `Distância: ${distanceTraveled}m`;

    // Condições de fim de jogo
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Remove as animações dos elementos 'pipe' e 'mario'
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Define a imagem de 'game-over' para o elemento 'mario'
        mario.src = '../images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Limpa o intervalo do loop principal do jogo
        clearInterval(loop);
    }

}, 10);

// Adiciona um evento de escuta para capturar as teclas pressionadas
document.addEventListener('keydown', jump);
