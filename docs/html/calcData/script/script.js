//Variáveis
let p = document.querySelector('p#res');
let clean = document.querySelector('#cl');
let dimi = document.querySelector('#tirar');
let res = document.querySelector('#rr')



//Eventos
clean.addEventListener('click', gambisSupre);
document.addEventListener('DOMContentLoaded', gambisSupre);
document.addEventListener('keypress', inserir);
document.addEventListener('keydown', nonModifier);

dimi.addEventListener('click', deletar);
res.addEventListener('click', resultado);

//Funções
 function resultado(resu) {
    if (resu = p.innerHTML) {
        return p.innerHTML = eval(resu).toLocaleString('pt-BR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        });
     };
};
function gambisSupre() {
    p.innerHTML = ''
};
function deletar() {
    let ap = p.innerHTML
    ap.length = 0;
    p.innerText = ap.substring(0, ap.length - 1)
    if (ap.length == 0) {
        p.innerText = ap;
    };
};

function insert(nn) {
    let num =  p.innerHTML
    p.innerHTML = num + nn
}

function inserir(event) {
    let key = event.key;
    let num = p.innerHTML;
    isNaN(key) ? p.innerHTML= num : p.innerHTML= num + key ;
    if (key == 'Enter') {
        p.innerText = num;
        return resultado();
    }
}
function nonModifier(event) {
    let key = event.key;
    if (key == 'Backspace') {
        return deletar();
    };
};

function operator(event) {
    let key = event.key;
    let num = p.innerHTML;
    p.innerText = num + key;
}