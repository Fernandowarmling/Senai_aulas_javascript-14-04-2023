//Crie uma função que receba um número e retorne o fatorial desse número.

let fatorial = 20

let resultadoFatorial = 1;

let arrayFatorial = [0];

if (fatorial == 1 || fatorial == 0) {
    resultadoFatorial = 1;
    arrayFatorial[0] = 1
} else {
    for (let i=0; i < fatorial+1; i++) {
        if (i > 0) {
            arrayFatorial[i] = i
        }
    }
    arrayFatorial.shift();
    for( i= 0;i < fatorial ; i++){
    resultadoFatorial = resultadoFatorial * arrayFatorial[i]
}
}

console.log(resultadoFatorial);
console.log(arrayFatorial);