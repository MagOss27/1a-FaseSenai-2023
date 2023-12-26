// Obtenção dos elementos HTML
let nomeProduto = document.getElementById("inptProduto");
let marcaProduto = document.getElementById("inptMarca");
let valorProduto = document.getElementById("inptValor");

let produtoPesquisar = document.getElementById("produtoPesquisa");
let marcaPesquisar = document.getElementById("marcaPesquisa");
let valorPesquisar = document.getElementById("valorPesquisa");

let produtoExcluir = document.getElementById("excluirProduto");
let vetorProdutos = [];

// Função para cadastrar um novo produto
function cadastrarProduto() {
    // Criação de um objeto para representar um produto
    let produtosLoja = {
        produtos: '',
        marca: '',
        valor: '',
    };

    // Atribuição dos valores dos campos do formulário ao objeto
    produtosLoja.produtos = nomeProduto.value;
    produtosLoja.marca = marcaProduto.value;
    produtosLoja.valor = valorProduto.value;

    // Recuperação dos produtos do armazenamento local (localStorage)
    vetorProdutos = JSON.parse(localStorage.getItem('produtosLoja'));

    // Verificação e tratamento se o vetor de produtos estiver vazio
    if (vetorProdutos == null) {
        vetorProdutos = [];
    }

    // Verificação se o campo de nome do produto está preenchido antes de cadastrar
    if (nomeProduto.value != '') {
        // Adição do novo produto ao vetor de produtos
        vetorProdutos.push(produtosLoja);
        // Armazenamento do vetor atualizado no localStorage
        localStorage.setItem('produtosLoja', JSON.stringify(vetorProdutos));
        // Exibição de mensagem de sucesso
        alert('Produto Cadastrado com Sucesso!');
        // Atualização da lista de produtos exibida na página
        listar();
    } else {
        // Exibição de alerta se algum campo estiver vazio
        alert('Preencha todos os campos!');
    }
}

// Função para listar os produtos cadastrados
function listar() {
    let lista = '';

    // Recuperação dos produtos armazenados no localStorage
    vetorProdutos = JSON.parse(localStorage.getItem('produtosLoja'));

    // Verificação se não existem produtos cadastrados
    if (vetorProdutos == null) {
        lista = 'Não existem produtos cadastrados!';
    } else {
        // Construção da lista de produtos para exibição na página
        for (i = 0; i < vetorProdutos.length; i++) {
            lista = lista + Object.values(vetorProdutos[i]).join(' - ') + '<br>';
        }
    }
    // Atualização do conteúdo HTML com a lista de produtos
    document.getElementById("lista").innerHTML = lista;
}

// Função para pesquisar um produto pelo seu nome
function pesquisar() {
    for (i = 0; i < vetorProdutos.length; i++) {
        if (produtoPesquisar.value == vetorProdutos[i].produtos) {
            produtoPesquisar.value = vetorProdutos[i].produtos;
            marcaPesquisar.value = vetorProdutos[i].marca;
            valorPesquisar.value = vetorProdutos[i].valor;
        }
    }
}

// Função para limpar os campos de pesquisa
function limparPesquisa() {
    produtoPesquisar.value = '';
    marcaPesquisar.value = '';
    valorPesquisar.value = '';
}

// Função para excluir um produto da lista
function excluir() {
    for (let i = 0; i < vetorProdutos.length; i++) {
        if (produtoExcluir.value == vetorProdutos[i].produtos) {
            // Remoção do produto do vetor
            vetorProdutos.splice(i, 1);
            // Atualização do localStorage com a lista de produtos atualizada
            localStorage.setItem('produtosLoja', JSON.stringify(vetorProdutos));
            // Exibição de mensagem de sucesso
            alert('Produto Excluído com Sucesso!');
            // Atualização da lista de produtos exibida na página
            listar();
        }
    }
}

// Função para editar um produto
function editar() {
    for (let i = 0; i < vetorProdutos.length; i++) {
        if (produtoPesquisar.value == vetorProdutos[i].produtos) {
            // Criação de um novo objeto com as informações atualizadas
            let objetoAtualizado = {
                produtos: produtoPesquisar.value,
                marca: marcaPesquisar.value,
                valor: valorPesquisar.value,
            };

            // Substituição do produto antigo pelo produto atualizado no vetor
            vetorProdutos.splice(i, 1, objetoAtualizado);
            // Atualização do localStorage com a lista de produtos atualizada
            localStorage.setItem('produtosLoja', JSON.stringify(vetorProdutos));
            // Atualização da lista de produtos exibida na página
            listar();
        }
    }
}
