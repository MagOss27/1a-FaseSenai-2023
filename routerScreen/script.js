function Logar() {
    let username = document.getElementById('inptUser').value;
    let password = document.getElementById('inptPassword').value;

    if (username === 'admin' && password === '123') {
        window.location.href = 'outraPagina.html ';
        // Redireciona para outra_pagina.html
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
}
