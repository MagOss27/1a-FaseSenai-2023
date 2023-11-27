document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.getElementById("button");
  
    signInButton.addEventListener("click", function() {
      const emailInput = document.getElementById("input1").value.trim();
      const passwordInput = document.getElementById("input2").value.trim();
  
      // Validação simples
      if (emailInput === "") {
        alert("Por favor, insira seu email.");
        return;
      }
      if (passwordInput === "") {
        alert("Por favor, insira sua senha.");
        return;
      }
  
      // Simulação de login bem-sucedido (substitua com sua lógica real)
      simulateSuccessfulLogin(emailInput);
    });
  
    function simulateSuccessfulLogin(email) {
      // Simula um tempo de espera antes de redirecionar para a próxima página (2 segundos neste exemplo)
      setTimeout(function() {
        // Redireciona para outra página após o login bem-sucedido
        window.location.href = "outra_pagina.html";
      }, 2000); // Tempo de espera em milissegundos (aqui são 2 segundos)
    }
  });
  