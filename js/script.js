var BtnLogin = document.getElementById("BtnLogin");
var modalLogin = document.getElementById("modalLogin");
var lightboxLogin = document.getElementById("lightboxLogin");
var closeLogin = document.getElementById("closeLogin");
// QUANDO FOR CLASSE: document.querySelector('.modal')

BtnLogin.onclick = function(){
    lightboxLogin.classList.add("visible");
}
lightboxLogin.onclick = function(e){
    if(e.target==lightboxLogin){
        lightboxLogin.classList.remove("visible");
    }
}
closeLogin.onclick = function(){
    lightboxLogin.classList.remove("visible");
}

// Seleciona o formulário
var form = document.querySelector('form');
// Quando for enviar mandar os dados
form.onsubmit = function (e) {
    // Seleciona os inputs
    var email = document.querySelector('#emailLogin');
    var password = document.querySelector('#passwordLogin');

    // Seleciona a modalLogin
    var modalLogin = document.querySelector('#modalLogin');

    // Verifica se o email e senha são permitidos
    if(email.value !== 'admin@admin.com' || password.value !== 'admin') {
        // Adiciona classe de erro na modalLogin pra mostrar um feedback
        modalLogin.classList.add('erro');

        // Remove a classe com erro depois de fazer a animação
        setTimeout(function() {
            modalLogin.classList.remove('erro');
        }, 1000);

        // Não deixa o usuário enviar o formulário
        return false;
    }
    localStorage.usuario = email.value;
}