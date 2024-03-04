let musicas = [
  {
    título: "Guitarra",
    artista: "Jão pedro",
    src: "html/playerData/musicas/No Mercy - TrackTribe.mp3",
    img: "html/playerData/imagens/ana-grave-gHcWaeldgtQ-unsplash (1).jpg",
  },
  {
    título: "Samba",
    artista: "Jão pedrin",
    src: "html/playerData/musicas/Dove Love - Quincas Moreira.mp3",
    img: "html/playerData/imagens/ferran-feixas-e5mTixNe02M-unsplash.jpg",
  },
  {
    título: "Vidro",
    artista: "John pedro",
    src: "html/playerData/musicas/Glass - Anno Domini Beats.mp3",
    img: "html/playerData/imagens/quaid-lagan-B68Bp4kGxP8-unsplash.jpg",
  },
];

//
    let indexMusica = 0;
    const mus = document.querySelector('audio');
    const rMus = document.querySelector('input.RangeMus');
    const fim = document.querySelector('#fim');
    const imagem = document.querySelector('img#img');
    const nomemus = document.querySelector('.descmusic h2');
    const nomeart = document.querySelector('.descmusic p');
    const botaoplay = document.querySelector('.botao-play');
    const botaopau = document.querySelector('.botao-pause');
    const botvoltar = document.querySelector('.anterior');
    const botfrente= document.querySelector('.proximo');
    const barra = document.querySelector('progress');
    const cBar = document.querySelector('div#barra')
    const botVol = document.querySelector('.botao-vol')
    const rangeVol = document.querySelector("#volume");
    renderizarMusica(indexMusica);
 
// eventos
botVol.addEventListener("click",   ()=> rangeVol.classList.toggle('active'));
rMus.addEventListener('change',    ()=> mus.currentTime = (mus.duration*rMus.value)/100);
cBar.addEventListener('mouseover', ()=>rMus.classList.add('active'));
cBar.addEventListener('mouseout',  ()=>rMus.classList.remove('active'));

botaoplay.addEventListener('click', tocarMusica);
botaopau.addEventListener('click', pausarMusica);
mus.addEventListener('timeupdate',attBarra);
rangeVol.addEventListener("change", volumeChange);


// funções e arrow funcion
botvoltar.addEventListener('click', () => {
    if (indexMusica < 0) {
        indexMusica = musicas.length;
    }
    indexMusica--;
    renderizarMusica(indexMusica);
    mus.play();
    botaopau.style.display = 'flex'
    botaoplay.style.display = 'none'
})
botfrente.addEventListener('click', () => {
    if (indexMusica >= musicas.length) {
        indexMusica = 0;
    }
    indexMusica++;
    renderizarMusica(indexMusica);
    mus.play();
    botaopau.style.display = 'flex'
    botaoplay.style.display = 'none'
})
function renderizarMusica(index) {
    mus.setAttribute('src', musicas[index].src);
    mus.addEventListener('loadeddata', () => {
        nomemus.textContent = musicas[index].título;
        nomeart.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        fim.textContent = converter(Math.floor(mus.duration));
    });
    tocarMusica();
}
function tocarMusica() {
    mus.play();
    botaopau.style.display = 'flex'
    botaoplay.style.display='none'
}
function pausarMusica() {
    mus.pause();
    botaopau.style.display = 'none'
    botaoplay.style.display = 'flex'
}
function volumeChange(){
    if(rangeVol.value == 0)
    {
        botVol.classList.remove('fa-volume-high');
        botVol.classList.remove("fa-volume-low");
        botVol.classList.add('fa-volume-xmark');
    }
    else if(rangeVol.value>0 && rangeVol.value<0.6)
    {
        botVol.classList.remove('fa-volume-high');
        botVol.classList.remove('fa-volume-xmark');
        botVol.classList.add('fa-volume-low')
    }
    else if(rangeVol.value>=0.6)
    {
        botVol.classList.remove("fa-volume-xmark");
        botVol.classList.remove("fa-volume-low");
        botVol.classList.add("fa-volume-high");
    }
    mus.volume = rangeVol.value;
}
function attBarra() {
    let tempodec = document.querySelector('#inicio')
    tempodec.textContent = converter(Math.floor(mus.currentTime));
    let pAt = mus.currentTime / mus.duration;
    barra.style.width = Math.floor(pAt*100) + '%';
    
    if(acabou())
    {
        if(indexMusica<musicas.length)
            indexMusica++;
        else
            indexMusica=0;

        renderizarMusica(indexMusica);
    }
}
const acabou = ()=>{
    return ((mus.currentTime/mus.duration)== 1)?true:false;
}
function converter(segundos){
    let cmin = Math.floor(segundos / 60)
    let cseg = segundos % 60;
    if (cseg < 10) {
        cseg = '0' + cseg;
    }
    return cmin + ':' + cseg;
}
