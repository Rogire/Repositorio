let musicas = [
    {
    título: 'Guitarra', artista:'Jão pedro', src: 'musicas/No Mercy - TrackTribe.mp3',
        img:'imagens/ana-grave-gHcWaeldgtQ-unsplash (1).jpg'
    },
    {
        título: 'Samba', artista:'Jão pedrin', src: 'musicas/Dove Love - Quincas Moreira.mp3',
        img: 'imagens/ferran-feixas-e5mTixNe02M-unsplash.jpg'
    },
    {   título: 'Vidro', artista:'John pedro', src: 'musicas/Glass - Anno Domini Beats.mp3',
        img: 'imagens/quaid-lagan-B68Bp4kGxP8-unsplash.jpg'
    }  
];

//Variáveis

const mus = document.querySelector('audio');
let indexMusica = 0;
const fim = document.querySelector('#fim');
const imagem = document.querySelector('img');
const nomemus = document.querySelector('.descmusic h2');
const nomeart = document.querySelector('.descmusic p');
renderizarMusica(indexMusica);

const botaoplay = document.querySelector('.botao-play');
const botaopau = document.querySelector('.botao-pause');
const botvoltar = document.querySelector('.anterior')
const botfrente= document.querySelector('.proximo')

// eventos
botaoplay.addEventListener('click', tocarMusica);
botaopau.addEventListener('click', pausarMusica);
mus.addEventListener('timeupdate',attBarra);

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

function attBarra() {
    let tempodec = document.querySelector('#inicio')
    tempodec.textContent = converter(Math.floor(mus.currentTime));

    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((mus.currentTime / mus.duration) * 100) + '%';
}

function converter(segundos){
    let cmin = Math.floor(segundos / 60)
    let cseg = segundos % 60;
    if (cseg < 10) {
        cseg = '0' + cseg;
    }
    return cmin + ':' + cseg;
}
