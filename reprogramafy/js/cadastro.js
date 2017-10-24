var btnCadastro = document.getElementById("btnCadastro");
var modalCadastro = document.getElementById("modalCadastro");
var lightboxCadastro = document.getElementById("lightboxCadastro");
var closeCadastro = document.getElementById("closeCadastro");
// QUANDO FOR CLASSE: document.querySelector('.modalCadastro')

btnCadastro.onclick = function(){
    lightboxCadastro.classList.add("visible");
}
lightboxCadastro.onclick = function(e){
    if(e.target==lightboxCadastro){
        lightboxCadastro.classList.remove("visible");
    }
}
closeCadastro.onclick = function(){
    lightboxCadastro.classList.remove("visible");
}

var formCadastro = lightboxCadastro.querySelector('form');

formCadastro.onsubmit = function (e) {
    
    // e.preventDefault();

    var emailCadastro = document.querySelector('#emailCadastro');
    var passwordCadastro = document.querySelector('#passwordCadastro');

    localStorage.email = emailCadastro.value;
    localStorage.password = passwordCadastro.value;
    console.log(localStorage.email, localStorage.password);
    
    //localStorage.email = "email@email.com";
    //localStorage.setItem(email, "email@email.com");

    // return false;

}