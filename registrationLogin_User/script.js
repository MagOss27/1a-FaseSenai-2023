// Obtendo referências aos elementos do DOM para cadastro
let nomeCadastro = document.getElementById('userCadastro');
let emailCadastro = document.getElementById('emailCadastro');
let senhaCadastro = document.getElementById('senhaCadastro');

// Obtendo referências aos elementos do DOM para login
let emailLogin = document.getElementById('emailLog'); // Nome alterado para evitar conflitos
let senhaLogin = document.getElementById('senhaLog');

// Vetores vazios para armazenamento temporário dos dados
let nomes = [];
let emails = [];
let senhas = [];

function cadastrarUser() {
    
    // Obtendo os valores dos campos de entrada
    /*O método Trim() remove espaços em branco adiconal no início ou no final desses valores seja removido,
    o que pode ser útil para evitar erros ou inconsistências nos dados inseridos pelo usuário*/
    let nome = nomeCadastro.value.trim();
    let email = emailCadastro.value.trim();
    let senha = senhaCadastro.value.trim();

    // Verificando se algum campo está vazio
    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos de cadastro.");
        return; // Impede o cadastro se algum campo estiver vazio
    }

    // Obter valores do LocalStorage (se houver) e armazenar
    let nomesLocalStorage = JSON.parse(localStorage.getItem('Cadastro_User')) || [];
    let emailsLocalStorage = JSON.parse(localStorage.getItem('Cadastro_Email')) || [];
    let senhasLocalStorage = JSON.parse(localStorage.getItem('Cadastro_password')) || [];

    // Adicionar os valores dos inputs aos vetores
    nomesLocalStorage.push(nome);
    emailsLocalStorage.push(email);
    senhasLocalStorage.push(senha);

    // Salvar no LocalStorage novamente
    localStorage.setItem('Cadastro_User', JSON.stringify(nomesLocalStorage));
    localStorage.setItem('Cadastro_Email', JSON.stringify(emailsLocalStorage));
    localStorage.setItem('Cadastro_password', JSON.stringify(senhasLocalStorage));

    // Mostrar mensagem de cadastro efetuado e redirecionar para a página de login
    alert("Seu cadastro foi efetuado com sucesso!");
    // Redirecionar para a página de Login
    window.location.href = "../telaLogin/login.html";
}

function logarUser() {
    // Obter valores do LocalStorage (se houver) e armazenar
    let emailsLocalStorage = JSON.parse(localStorage.getItem('Cadastro_Email')) || [];
    let senhasLocalStorage = JSON.parse(localStorage.getItem('Cadastro_password')) || [];

    // Verificar se os dados existem no LocalStorage
    if (emailsLocalStorage.length === 0 || senhasLocalStorage.length === 0) {
        alert('Nenhum usuário cadastrado. Faça o cadastro primeiro.');
        return;
    }

    let logou = false;

    // Verificar se o email e a senha inseridos correspondem aos valores no localStorage
    for (let i = 0; i < emailsLocalStorage.length; i++) {
        if (emailLogin.value === emailsLocalStorage[i] && senhaLogin.value === senhasLocalStorage[i]) {
            logou = true;
            break;
        }
    }

    if (logou) {
        alert('Login efetuado!');
        // Redirecionar para a página Principal
        window.location.href = '../telaPrincipal/principal.html';
    } else {
        alert('Login Falhou!');
    }
}

//Função do olho na Tela de Cadastro:
function togglePasswordCadastro() {
    let senhaInput = document.getElementById('senhaCadastro');
    let showPassword = document.getElementById('showPasswordCadastro');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        showPassword.textContent = '🔒';
    } else {
        senhaInput.type = 'password';
        showPassword.textContent = '👁️';
    }
}

//Função do olho na Tela de Login:
function togglePasswordLogin() {
    let senhaInput = document.getElementById('senhaLog');
    let showPassword = document.getElementById('showPasswordCadastro');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        showPassword.textContent = '🔒';
    } else {
        senhaInput.type = 'password';
        showPassword.textContent = '👁️';
    }
}


//Redirecionar para Página de Login
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '../telaLogin/login.html';
}

//Redirecionar para Página de Perfil
function redirectToProfile() {
    window.location.href = '../telaPerfil/perfil.html';
}