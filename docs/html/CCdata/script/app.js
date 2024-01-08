//Botões da calculadora
const res=  document.querySelector("div#res");
const ans=  document.querySelector("div#ans");
const som=  document.querySelector("div#som");
const sub=  document.querySelector("div#sub");
const vzs=  document.querySelector("div#vzs");
const div=  document.querySelector("div#div");
const del=  document.querySelector("div#del");
const ac =  document.querySelector("div#ac");
const c1=   document.querySelector("div#c1");
const c2=   document.querySelector("div#c2")

const sqr = document.querySelector("div#sqr");
const quad= document.querySelector("div#quad");
const pot = document.querySelector("div#pot");
const log = document.querySelector("div#log");
const ln  = document.querySelector("div#ln");
const sin = document.querySelector("div#sin");
const cos = document.querySelector("div#cos");
const tg  = document.querySelector("div#tg");

let contador=0

//Array para armazenar as teclas 
const numeros = document.querySelectorAll("div.botao.g");
const op=document.querySelectorAll("div.botao.o")

//função para os números
for(let i=0; i<numeros.length; i++)
{
    numeros[i].addEventListener("click",(e)=>{
        e.preventDefault();
        let aux=[];
        EscNum(numeros[i].getAttribute("data-value"),aux)
        Numeros(i);
    })
}

//função para os operadores
for (let i = 0; i < op.length; i++) {
    op[i].addEventListener("click", (e) => {
    e.preventDefault();
    EscOp(op[i].getAttribute("data-value"),teste);
  });
}

ac.addEventListener("click",(e)=>{
    e.preventDefault();
    c1.textContent = ac.getAttribute("data-value")
})
del.addEventListener("click",(e)=>{
    e.preventDefault();
    let ap=c1.innerHTML;
    c1.textContent= ap.substring(0, ap.length-1)
})


function Numeros(i){
    let aux = [];
    return EscNum(numeros[i].getAttribute("data-value"), aux);
}

function EscNum(val,aux)
{
    c1.textContent+=val;
    aux[contador]=val
    contador++;
    return aux;
}

function EscOp(val,aux)
{
    c1.textContent += val;
    console.log(aux)
}
