// Array para armazenar as frutas da salada
let saladaFrutas = [];

// Função para montar a salada quando uma fruta é adicionada
function montarSalada() {
    // Obtém o valor do campo de entrada e o converte para minúsculas
    let fruta = document.getElementById('inptFruta').value.toLowerCase();

    // Verifica se a fruta não é 'cereja' (condição para adicionar mais frutas)
    if (fruta !== 'cereja') {
        // Adiciona a fruta à lista de salada de frutas
        saladaFrutas.push(fruta);

        // Chama a função para exibir a salada de frutas atualizada
        exibirSalada();

        // Chama a função para voltar o foco para o campo de entrada
        voltarParaInput();
    } else {
        // Se a fruta for 'cereja', alerta que a salada está pronta
        alert('Salada Pronta: ' + saladaFrutas.join(', '));
    }
}

// Função para exibir a salada de frutas
function exibirSalada() {
    // Obtém o elemento onde a salada de frutas será exibida
    let resultado = document.getElementById('result');

    // Limpa o conteúdo atual para atualizar a exibição da salada
    resultado.innerHTML = '';

    // Itera sobre cada fruta na lista de salada de frutas
    saladaFrutas.forEach(fruta => {
        // Cria um parágrafo para cada fruta e adiciona ao resultado
        let paragrafo = document.createElement('p');
        paragrafo.textContent = fruta;
        resultado.appendChild(paragrafo);
    });
}

// Função para voltar o foco para o campo de entrada e posicionar o cursor no final do texto
function voltarParaInput() {
    // Obtém o elemento de entrada
    let input = document.getElementById('inptFruta');

    // Define o foco para o input
    input.focus();

    // Move o cursor para o final do texto no input
    if (typeof input.selectionStart == 'number') {
        input.selectionStart = input.selectionEnd = input.value.length;
    } else if (typeof input.createTextRange != 'undefined') {
        input.focus();
        let range = input.createTextRange();
        range.collapse(false);
        range.select();
    }
}
