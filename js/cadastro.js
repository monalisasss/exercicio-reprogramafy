var BtnCadastro = document.getElementById("BtnCadastro");
var modalCadastro = document.getElementById("modalCadastro");
var lightboxCadastro = document.getElementById("lightboxCadastro");
var close = document.getElementById("closeCadastro");
// QUANDO FOR CLASSE: document.querySelector('.modalCadastro')

BtnCadastro.onclick = function(){
    lightboxCadastro.classList.add("visible");
}
lightboxCadastro.onclick = function(e){
    if(e.target==lightboxCadastro){
        lightboxCadastro.classList.remove("visible");
    }
}
close.onclick = function(){
    lightboxCadastro.classList.remove("visible");
}

// Seleciona o formulário
var form = document.querySelector('form');
// Quando for enviar mandar os dados
form.onsubmit = function (e) {
    // Seleciona os inputs
    var email = document.querySelector('#emailCadastro');
    var password = document.querySelector('#passwordCadastro');

    // Seleciona a modalCadastro
    var modalCadastro = document.querySelector('#modalCadastro');

    // Verifica se o email e senha são permitidos
    if(email.value !== 'admin@admin.com' || password.value !== 'admin') {
        // Adiciona classe de erro na modalCadastro pra mostrar um feedback
        modalCadastro.classList.add('erro');

        // Remove a classe com erro depois de fazer a animação
        setTimeout(function() {
            modalCadastro.classList.remove('erro');
        }, 1000);

        // Não deixa o usuário enviar o formulário
        return false;
    }
    localStorage.usuario = email.value;
}