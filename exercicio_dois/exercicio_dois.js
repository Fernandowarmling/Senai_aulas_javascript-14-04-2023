//Crie uma função que receba um array de strings e retorne o número total de caracteres.

let nomes = ["pele","tostao","xuxa","falcao"];
let tamanho = 0;


for( let i= 0; i< nomes.length; i++){
    tamanho = nomes[i].length + tamanho;
}

console.log(tamanho);
