const num1 = parseInt(prompt('Digite o primeiro número'));
const num2 = parseInt(prompt('Digite o segundo número'))
const operacao = prompt('Escolha a operação: somar, subtrair, multiplicar, dividir').toLowerCase()

if(operacao === 'somar') {
    console.log(num1 + num2)
} else if(operacao === 'subtrair') {
    console.log(num1 - num2)
} else if(operacao === 'multiplicar') {
    console.log(num1 * num2)
} else if(operacao === 'dividir') {
    console.log(num1 / num2)
} else {
    console.log('A operação que deseja realizar é inválida')
}