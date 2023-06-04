function teste() {
    var nome = document.frmFormulario.txtnome.value
    
    var exnome = /^[a-zA-Z\s]+$/;
    var nomenum = /^.{2,}$/;
    
    

    if (!exnome.test(nome) && !nomenum.test(nome) ) { 
        console.log("Erro de nome")
        alert("Preencha o campo Nome correntamente.");
        document.frmFormulario.txtnome.focus();
        return false;
    }

    var email = document.frmFormulario.txtmail.value
    const exmail  =/\S+@\S+\.\S+/;

    if(!exmail.test(email)){
        console.log("Erro de email")
        alert("Preencha o campo Email corretamente.")
        document.frmFormulario.txtmail.focus();
        return false;
    }
        
    

}


