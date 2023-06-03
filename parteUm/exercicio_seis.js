//Crie uma função que receba um array de números como parâmetro e retorne um novo array com o dobro de cada número.

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,-1]

for( let i =  0; i< numeros.length ; i++){
    numeros[i] = numeros[i]*2
}

console.log(numeros)