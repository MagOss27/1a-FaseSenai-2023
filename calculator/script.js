let Valor_Input_um = document.getElementById("Input_um")
let Valor_Input_dois = document.getElementById("Input_dois")
let divResultado = document.getElementById("resultado")


function Soma(){

    divResultado.innerHTML = (Number(Valor_Input_um.value) + Number(Valor_Input_dois.value)).toFixed(2)
}

function Subtracao(){

    divResultado.innerHTML = (Number(Valor_Input_um.value) - Number(Valor_Input_dois.value)).toFixed(2)
}

function Multiplicacao(){

    divResultado.innerHTML = (Number(Valor_Input_um.value) * Number(Valor_Input_dois.value)).toFixed(2)
}

function Divisao(){

    divResultado.innerHTML = (Number(Valor_Input_um.value) / Number(Valor_Input_dois.value)).toFixed(2)
}

function Limpar(){

    Valor_Input_um.value = ""
    Valor_Input_dois.value = ""
    input_resultado.value = ""
}