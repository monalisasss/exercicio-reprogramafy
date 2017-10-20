var playlist = [
  {
    "album": {
      "name": "Is That For Me",
      "cover":
        "https://i.scdn.co/image/21d3c06fe84e08f0f14f16243d2c1e76a08c86b1"
    },
    "artists": "Alesso, Anitta",
    "name": "Is That For Me",
    "preview_url":
      "https://p.scdn.co/mp3-preview/1d9fe8b793a54f64d43f6413754de5755551f5cd?cid=8897482848704f2a8f8d7c79726a70d4"
  },
  {
    "album": {
      "name": "Beautiful Trauma",
      "cover":
        "https://i.scdn.co/image/9cd024bf875a35a46650ff33cc225e4fa14234f9"
    },
    "artists": "P!nk, Eminem",
    "name": "Revenge",
    "preview_url":
      "https://p.scdn.co/mp3-preview/b7895958fbbcfcf68a8ce6e4b92159a9f8ee56ef?cid=8897482848704f2a8f8d7c79726a70d4"
  },
  {
    "album": {
      "name": "Enormous (feat. Ty Dolla $ign)",
      "cover":
        "https://i.scdn.co/image/d15d59eae2bfd366f4e5c711c9dce071b910eddf"
    },
    "artists": "Gucci Mane, Ty Dolla $ign",
    "name": "Enormous (feat. Ty Dolla $ign)",
    "preview_url":
      "https://p.scdn.co/mp3-preview/e43781dbdb2c634b755da107a3c8bbe27733a5a2?cid=8897482848704f2a8f8d7c79726a70d4"
  },
  {
    "album": {
      "name": "Feels Great (feat. Fetty Wap & CVBZ)",
      "cover":
        "https://i.scdn.co/image/f2e54909bc9c038b107b47eb20e968351afd18fd"
    },
    "artists": "Cheat Codes, Fetty Wap, CVBZ",
    "name": "Feels Great (feat. Fetty Wap & CVBZ)",
    "preview_url":
      "https://p.scdn.co/mp3-preview/1a53268241605871a4c8af82c634f5b81d751996?cid=8897482848704f2a8f8d7c79726a70d4"
  },
  {
    "album": {
      "name": "Mais Bonito Não Há",
      "cover":
        "https://i.scdn.co/image/4877bf1379b8186ccf32b61c30426d5904c9f81a"
    },
    "artists": "Milton Nascimento, Tiago Iorc",
    "name": "Mais Bonito Não Há",
    "preview_url":
      "https://p.scdn.co/mp3-preview/830b0e38fb810397177333a88921ed1543c45582?cid=8897482848704f2a8f8d7c79726a70d4"
  },
  {
    "album": {
      "name": "O Sol",
      "cover":
        "https://i.scdn.co/image/bfde74115897eddbda4ef7d488ac7f670fa000ec"
    },
    "artists": "Vitor Kley",
    "name": "O Sol",
    "preview_url":
      "https://p.scdn.co/mp3-preview/a3b2f4272b3aa67ee13acab655571f7208d97476?cid=8897482848704f2a8f8d7c79726a70d4"
  },
  {
    "album": {
      "name": "Silva Canta Marisa (Ao Vivo)",
      "cover":
        "https://i.scdn.co/image/4a6f1c7139f25b3469ca97dd72fde32eb72a6ba2"
    },
    "artists": "Silva",
    "name": "Noturna (Nada de Novo Na Noite) - Ao Vivo",
    "preview_url":
      "https://p.scdn.co/mp3-preview/0d5e194c3668ec266f8845c768776be820a47e66?cid=8897482848704f2a8f8d7c79726a70d4"
  }
]

var playlistUl = document.querySelector('#playlist ul');
for(i=0; i<playlist.length; i++){
  
  var li = document.createElement('li');
  var h3 = document.createElement('h3');
  li.setAttribute('data-id', i);

  var spanAlbum = document.createElement('span');
  spanAlbum.classList.add('album');

  var spanArtista = document.createElement('span');
  spanArtista.classList.add('artistas');

  var url = playlist[i].preview_url;

  h3.innerText = playlist[i].name;
  spanAlbum.innerText = playlist[i].album.name;
  spanArtista.innerText = playlist[i].artists;

  li.appendChild(h3);
  li.appendChild(spanAlbum);
  li.appendChild(spanArtista);

  playlistUl.appendChild(li);

  li.onclick = mudarMusica;
}
function mudarMusica(){

  var lis = document.querySelectorAll('#playlist li');
  
  for (var i=0; i<lis.length; i++){
    lis[i].classList.remove('active');
  }

  // var liActive = document.querySelector('#playlist li.active');
  // if(liActive!=null){
  //   liActive.classList.remove('active');
  // }

  this.classList.add('active');

  var id = this.getAttribute('data-id');
  var audio = document.querySelector('audio');
  audio.src = playlist[id].preview_url;
  audio.play();
  console.log(playlist[id].album.cover);

  var capa = document.querySelector(".capa img");
  capa.src = playlist[id].album.cover;

  var titulo = document.querySelector(".musica h1");
  titulo.innerText = playlist[id].name;
}

var pesquisaInput = document.querySelector('#pesquisa');

pesquisaInput.onkeyup = function(){
  var termo = this.value;
    var lis = document.querySelectorAll('#playlist li');

    for(var i=0; i<lis.length; i++){
      var titulo = lis[i].querySelector('h3');
      lis[i].style.display ='block';
       if(titulo.innerText.toLowerCase().search(this.value.toLowerCase()) > -1){
       }else{
          lis[i].style.display ='none';
       }
    }

}