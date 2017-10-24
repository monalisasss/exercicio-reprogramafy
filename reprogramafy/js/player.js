var audio = document.querySelector('audio');
var botaoPlay = document.querySelector('.botao-play');
var tocado = document.querySelector('.tocado');
var tempoAtual = document.querySelector('.tempo-atual');
var tempoTotal = document.querySelector('.duracao');
// tempoTotal.innerHTML = audio.duration;

var percentual;
var duracaoAtual;

botaoPlay.onclick = function(){
  if (audio.paused){
    audio.play();
    botaoPlay.style.backgroundImage = "url('img/play.svg')";;
  } else{
    audio.pause();
    botaoPlay.style.backgroundImage = "url('img/pause.svg')";;
  }
}
audio.onplay = function(){
  console.log('DEU PLAY');
  botaoPlay.style.backgroundImage = "url('img/pause.svg')";;
}
audio.onpause = function(){
  console.log('DEU PAUSE');
  botaoPlay.style.backgroundImage = "url('img/play.svg')";;
}
audio.ontimeupdate = function(){
  percentual = (audio.currentTime/audio.duration)*100;
  tocado.style.width = percentual+'%';
  duracaoAtual = Math.round(audio.currentTime);

  var data = new Date(2017, 0, 1);
  data.setSeconds(duracaoAtual);
  console.log(duracaoAtual);

  tempoAtual.innerHTML = data.getMinutes().toString().padStart(2, '0') + ":" + data.getSeconds().toString().padStart(2, '0');
}





// var botaoPlay = document.querySelector('.botao-play');
// var audio = document.querySelector('#player audio');
// var duracao = document.querySelector('.duracao');
// var tempoAtual = document.querySelector('.tempo-atual');

// botaoPlay.onclick = function() {
//     if(audio.paused) {
//       audio.play();
//     } else {
//       audio.pause();
//     }
// }

// audio.onloadeddata = function() {
//   duracao.innerText = '00:' + Math.round(audio.duration);
// }

// audio.ontimeupdate = function(e) {
//   var larguraBarra = (audio.currentTime / audio.duration) * 100;
//   var barra = document.querySelector('.tocado');
//   barra.style.width = larguraBarra + '%';
  
//   // Arredonda o valor do tempo atual
//   var duracaoAtual = Math.round(audio.currentTime);
  
//   // O CÓDIGO ABAIXO É SÓ PRA TRANSFORMAR 00:1 em 00:01
//   // transform em string
//   //Com o tempo atual em string a gente coloca  o 0 no começo
//   // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//   duracaoAtual = duracaoAtual.toString().padStart(2, '0');

//   tempoAtual.innerText = '00:' + duracaoAtual;
// }
