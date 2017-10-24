var palavra;
var comecou = false;
var utilizadas = [];

$("#btnCadastrar").click(function(event){

    event.preventDefault();
    
    palavra = $("#palavra").val();
    
    if(palavra === ""){
        alert("Por favor preencha o campo.");
    }else{
        
        palavra = palavra.trim();
        palavra = palavra.toLowerCase();

        for(i=0; i<palavra.length; i++){
            var span = $("<span>"+palavra[i]+"</span>");
            span.appendTo(".letras");
        }
        
        $("#forca").addClass("visivel");
        $("#cadastro").removeClass("visivel");
        comecou = true;


    } 
});

var acerto = 0;
var erro = 0;
var tentativas = 7;

$(document).keyup(function(event){
    if (comecou){

        var tecla = event.key;
        var letras = [];

        // se a tecla não for letra
        if(tecla.length>1){
            return;
        }

        // ERRO
        if(palavra.indexOf(tecla)==-1 && utilizadas.indexOf(tecla)==-1){
            
            $(".corpo *").eq(erro).attr("class", "st0 visivel");
            erro++;
            if(erro==tentativas){
                console.log("PERDEU!!!!!");
                $("#perdeu").addClass("visivel");
                $("#forca").removeClass("visivel");
            }
            
        }

        // se não foi utilizada ainda
        if(utilizadas.indexOf(tecla)!=-1) {
            return;
        } else {
            var maiuscula = tecla.toUpperCase();
            var span = $("<span> "+maiuscula+" </span>");
            span.appendTo(".letras-usadas");
        }

        utilizadas.push(tecla);

        // se tiver a letra em palavra
        if (palavra.indexOf(tecla)!=-1){
            for (var i = 0; i < palavra.length; i++) {
                var char = palavra[i];
                if(char == tecla) { 
                    letras.push(i);
                    $(".letras span").eq(i).addClass("visivel");
                    acerto++;
                }
                    if(acerto==palavra.length){
                        erro.log("GANHOU!!!!!");
                        $("#ganhou").addClass("visivel");
                        $("#forca").removeClass("visivel");
                    }
            }
        }
        
        $(".letras span:not(.visivel)")
        // SUCESSO
        // $.each(palavra.split(''),function(i,v){
        //     if(v == tecla) { 
        //         letras.push(i);
        //         var span = $(".letras span:nth-child("+(i+1)+")");
        //         span.addClass("visivel");
        //         acerto++;
        //     }
        //     if(acerto==palavra.length){
        //         erro.log("GANHOU!!!!!");
        //         $("#ganhou").addClass("visivel");
        //         $("#forca").removeClass("visivel");
        //     }
        // });
    }
});

$(".btn-recomecar").click(function(event){
    $(".corpo *").attr("class","st0");

    comecou = false;
    palavra = "";
    $("#palavra").val("");
    acerto = 0;
    erro = 0;
    utilizadas = [];

    $("#forca .letras").html("");
    $("#forca .letras-usadas").html("");
    
    $("#cadastro").addClass("visivel");
    $("#perdeu").removeClass("visivel");
    $("#ganhou").removeClass("visivel");
});