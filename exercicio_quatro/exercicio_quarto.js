// Crie um array de forma literal que armazene os nomes de cinco frutas diferentes e, em seguida, crie uma função que retorne uma mensagem indicando se a fruta informada está presente ou não no array.

let busca= "Maca";
let validaBusca = false;

let frutas = ["Uva","Maca","Pera","Melancia","Melao"];

for(let i = 0; i<frutas.length; i++){
if(frutas[i]== busca){
    validaBusca = true
    console.log(frutas[i])
}
}

if(validaBusca == false){
    console.log("Fruta não encontrada")
}
