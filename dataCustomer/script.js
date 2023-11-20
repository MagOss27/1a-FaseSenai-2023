function exibirInfoCliente() {

    let Nome_cliente = document.getElementById("nome").value;
    let idade_cliente = document.getElementById("idade").value;
    let nacionalidade_cliente = document.getElementById("nacionalidade").value;
    let endereco_cliente = document.getElementById("endereco").value;
    let infoCliente = `Cliente ${Nome_cliente}, com ${idade_cliente} anos, ${nacionalidade_cliente}, reside no endereço ${endereco_cliente}`;
  
    alert(infoCliente);

  }
  