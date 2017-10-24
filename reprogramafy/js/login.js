var btnLogin = document.getElementById("btnLogin");
var modalLogin = document.getElementById("modalLogin");
var lightboxLogin = document.getElementById("lightboxLogin");
var closeLogin = document.getElementById("closeLogin");
// QUANDO FOR CLASSE: document.querySelector('.modal')

btnLogin.onclick = function(){
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

var formLogin = lightboxLogin.querySelector('form');

formLogin.onsubmit = function (e) {

    console.log(localStorage.email, localStorage.password);

    var emailLogin = document.querySelector('#emailLogin');
    var passwordLogin = document.querySelector('#passwordLogin');

    var modalLogin = document.querySelector('#modalLogin');

    if(emailLogin.value !== localStorage.email || passwordLogin.value !== localStorage.password) {
        

        modalLogin.classList.add('erro');
        alert("E-mail ou senha inválidos!")

        setTimeout(function() {
            modalLogin.classList.remove('erro');
        }, 1000);
        e.preventDefault();

        return false;
    }
}