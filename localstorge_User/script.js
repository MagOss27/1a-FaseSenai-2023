function salvarUsuario() {

    let nome = document.getElementById('inptNome').value;
    let idade = document.getElementById('inptIdade').value;

    if (nome && idade) {
        let usuario = {
            nome: nome,
            idade: idade
        };

        // Converte o objeto para uma string JSON e armazena no localStorage
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert('Usuário Salvo  com Sucesso!')

    } else {
        alert('Por favor, preencha corretamente..')
    }
}