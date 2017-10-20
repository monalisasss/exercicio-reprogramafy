    if(localStorage.usuario){
        var botao = document.querySelector('#botao');
        botao.innerText = localStorage.email;
    }else{
      alert("Não autorizado");
    }