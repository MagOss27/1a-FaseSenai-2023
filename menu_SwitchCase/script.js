function escolhaOpcao(opcao) {
    // Obtém o elemento com o ID 'resultado'
    let resultado = document.getElementById('resultado');

    // Utiliza uma estrutura de switch-case para verificar a opção escolhida
    switch (opcao) {
        // Caso a opção seja 'a'
        case 'a':
            // Define o conteúdo do elemento 'resultado' para "Você escolheu: Falar com a atendente"
            resultado.textContent = "Você escolheu: Falar com a atendente";
            break;

        // Caso a opção seja 'b'
        case 'b':
            // Define o conteúdo do elemento 'resultado' para "Você escolheu: Falar com o RH"
            resultado.textContent = "Você escolheu: Falar com o RH";
            break;

        // Caso a opção seja 'c'
        case 'c':
            // Define o conteúdo do elemento 'resultado' para "Você escolheu: Falar com o gerente"
            resultado.textContent = "Você escolheu: Falar com o gerente";
            break;

        // Caso a opção seja 'd'
        case 'd':
            // Define o conteúdo do elemento 'resultado' para "Você escolheu: Sair"
            resultado.textContent = "Você escolheu: Sair";
            break;

        // Se nenhuma das opções anteriores for correspondida (opção inválida)
        default:
            // Define o conteúdo do elemento 'resultado' para "Opção inválida."
            resultado.textContent = "Opção inválida.";
    }
}
