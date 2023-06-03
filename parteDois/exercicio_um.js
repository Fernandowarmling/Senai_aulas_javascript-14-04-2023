//Crie uma função que receba uma string e retorne o número de vogais presentes nessa string.

let vogais = ["a","e","i","o","u"];

let palavra = "pAralelepipedo"

palavra = palavra.toLowerCase();

let validar = palavra.split("")

let totalVogais = 0;

for( let i = 0 ; i <validar.length ; i++){
    for( let v = 0 ; v< vogais.length ; v++){
        if(palavra[i] == vogais[v]){
            totalVogais = totalVogais + 1
        }
        
    }
}

console.log(totalVogais)