let Ano_nascimento
let Ano_atual
let idade_usuario

let idade_meses
let idade_semanas
let idade_dias



Ano_nascimento = (prompt("Digite o Ano em que Você Nasceu: "))
Ano_atual = (prompt("Digite o Ano Atual: "))


idade_usuario = (Ano_atual - Ano_nascimento)
alert(`A sua Idade é de ${idade_usuario} Anos.`)

idade_meses = idade_usuario * 12
alert(`A sua Idade em Meses é de ${idade_meses} Meses.`)

idade_semanas = idade_usuario * 52
alert(`A sua Idade em Semanas é de ${idade_semanas} Semanas.`)

idade_dias = idade_usuario * 365
alert(`A sua Idade em dias é de ${idade_dias} Dias.`)