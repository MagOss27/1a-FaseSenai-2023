let nomeCadastro = document.getElementById('userCadastro');
let emailCadastro = document.getElementById('emailCadastro');
let senhaCadastro = document.getElementById('senhaCadastro');

// Armazena os valores dos inputs da tela de Login
let emailLogin = document.getElementById('emailLog'); // Nome alterado para evitar conflitos
let senhaLogin = document.getElementById('senhaLog');

// Cria vetores vazios para armazenamento temporário dos dados
let nomes = []
let emails = []
let senhas = []

function cadastrarUser() {

    // Obtém os valores dos campos de entrada
    let nome = nomeCadastro.value.trim();
    let email = emailCadastro.value.trim();
    let senha = senhaCadastro.value.trim();

    // Verifica se algum campo está vazio
    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos de cadastro.");
        return; // Impede o cadastro se algum campo estiver vazio
    }

    // Pega valores do LocalStorage (se tiver) e armazena
    let nomes = JSON.parse(localStorage.getItem('Cadastro_User')) || [];
    let emails = JSON.parse(localStorage.getItem('Cadastro_Email')) || [];
    let senhas = JSON.parse(localStorage.getItem('Cadastro_password')) || [];

    // Adiciona os valores dos inputs aos vetores
    nomes.push(nome);
    emails.push(email);
    senhas.push(senha);

    // Joga para o LocalStorage novamente
    localStorage.setItem('Cadastro_User', JSON.stringify(nomes));
    localStorage.setItem('Cadastro_Email', JSON.stringify(emails));
    localStorage.setItem('Cadastro_password', JSON.stringify(senhas));

    // Mostra mensagem cadastro efetuado e carrega a página de login
    alert("Seu cadastro foi efetuado com sucesso!");
    // Pula para a página de Login
    window.location.href = "login.html";
    
}

function logarUser() {

    // Pega valores do LocalStorage (se tiver) e armazena
    let emails = JSON.parse(localStorage.getItem('Cadastro_Email')) || [];
    let senhas = JSON.parse(localStorage.getItem('Cadastro_password')) || [];

    // Exibe os valores recuperados do LocalStorage
    console.log('Emails no localStorage:', emails);
    console.log('Senhas no localStorage:', senhas);

    // Verifica se os dados existem no localStorage
    if (emails.length === 0 || senhas.length === 0) {
        alert('Nenhum usuário cadastrado. Faça o cadastro primeiro.');
        return;
    }

    // Exibe os valores inseridos no formulário de login
    console.log('Emails do LocalStorage:', emails);
    console.log('Senhas do LocalStorage:', senhas);
    console.log('Email inserido:', emailLog.value);
    console.log('Senha inserida:', senhaLogin.value);

    let logou = false;

    // Realiza um loop do tamanho dos vetores de emails e senhas
    for (let i = 0; i < emails.length; i++) {
        // Se o email no input do login for encontrado nos emails armazenados
        if (emailLog.value === emails[i] && senhaLogin.value === senhas[i]) {
            // Indica que o login foi bem-sucedido
            logou = true;
            break;
        }
    }

    if (logou) {
        // Mostra mensagem de login efetuado
        alert('Login efetuado!');
        // Pula para a página Principal
        window.location.href = 'principal.html';
    } else {
        // Senão, mostra mensagem de login falhou
        alert('Login Falhou!');
    }
}



