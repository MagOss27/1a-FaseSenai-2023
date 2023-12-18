let Quantidade_pessoas = document.getElementById("inputpessoas");
let Area_regiao = document.getElementById("inputarea");
let Resultado = document.getElementById("divResultado");

function Calcular() {

    if (Quantidade_pessoas.value && Area_regiao.value) {
        let densidade = Number(Quantidade_pessoas.value / Area_regiao.value);
        Resultado.innerHTML = 'A densidade populacional é de ' + densidade.toFixed(2) + ' pessoas por unidade de área. ';

        if (densidade >= 100) {
            Resultado.innerHTML += 'Alta Densidade';
        } else if (densidade >= 25 && densidade < 100) {
            Resultado.innerHTML += 'Média Densidade';
        } else {
            Resultado.innerHTML += 'Baixa Densidade';
        }
    } else {
        alert('Por favor, preencha os valores para calcular.');
    }

}
