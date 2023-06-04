function validaDados() {
    let idade = document.frmIdadeAltura.idade.value;
    let altura = document.frmIdadeAltura.altura.value;
   

    if (idade< 18 || idade>60) {
        console.log("Idade Fora dos parametros");
        alert("Idade Fora dos parametros");
        document.frmIdadeAltura.numIdade.focus();
        return false;
    }

    if(altura< 150 || altura >200){
        console.log("Altura Fora dos parametros");
        alert("Altura Fora dos parametros");
        document.frmIdadeAltura.numAltura.focus();
        return false;
    }

    alert("Validado Com sucesso")
    return true

    

}