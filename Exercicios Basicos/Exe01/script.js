/*
alert('Bem-vindo! A seguir pediremos que informe alguns dados.')
let nome = prompt('Digite seu nome!')
let idade = prompt('digite sua idade!')

 confirm(`A sua idade ${idade} está correta?`)
document.write (`Bem vindo ${nome}, a sua idade é ${idade}`)
*/

let olderPersonName = prompt('Enter the name of the oldest person')
let olderPersonAge = prompt('Enter the age of the aldest person')

let youngPersonName = prompt('Enter the name of the young person')
let youPersonAge = prompt('Enter the age of the young person')

let ageDifference = olderPersonAge - youPersonAge

document.write(`Person more alder: ${olderPersonName} <br> Older: ${olderPersonAge} <br><br>
 Person more young: ${youngPersonName} <br> Older: ${youPersonAge} <br> <br> Age of difference: ${ageDifference}  `)