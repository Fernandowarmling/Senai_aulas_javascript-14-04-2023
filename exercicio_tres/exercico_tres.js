//Crie um array associativo que armazene o nome e o e-mail de três pessoas diferentes e, em seguida, crie uma função que retorne o e-mail de uma pessoa com base no seu nome.

let busca= "teste1";
let validaBusca = false;

let usuario = [
    {
        nome: "teste2",
        email:"teste2@teste2"
    },
    {
        nome:"teste1",
        email:"teste1@teste1"
    },
    {
        nome:"teste3",
        email:"teste3@teste3"
    }

]

for(let i = 0; i<usuario.length; i++){
if(usuario[i].nome == busca){
    validaBusca = true
    console.log(usuario[i].email)
}
}

if(validaBusca == false){
    console.log("Usuario não encontrado")
}




