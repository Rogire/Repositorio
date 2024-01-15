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

let eq;


//Array para armazenar as teclas 
const numeros = document.querySelectorAll("div.botao.g");
const op=document.querySelectorAll("div.botao.o")

//função para os números
for(let i=0; i<numeros.length; i++)
{
    numeros[i].addEventListener("click",(e)=>{
        e.preventDefault();
        EscNum(numeros[i].getAttribute("data-value"))
    })
}

//função para os operadores
for (let i = 0; i < op.length; i++) {
    op[i].addEventListener("click", (e) => {
    e.preventDefault();
    EscOp(op[i].getAttribute("data-value"),op[i].getAttribute("data-E"));
  });
}

ac.addEventListener("click",(e)=>{
    e.preventDefault();
    c1.textContent = ac.getAttribute("data-value")
    c2.textContent=ac.getAttribute("data-value")
})
del.addEventListener("click",(e)=>{
    e.preventDefault();
    let ap=c1.innerHTML;
    c1.textContent= ap.substring(0, ap.length-1)
})

res.addEventListener('click',(e)=>{
    e.preventDefault();
    let resu = eval(c1.textContent)
    c2.textContent = resu
});

//função para escrever a equação
function EscNum(val)
{
    c1.textContent+=val;
    eq += val;
}

function EscOp(val,aux)
{
    c1.textContent += val;

    if(aux !== "esp")
        eq +=val;
    else
    {
        switch (val)
        {
            case "sqr":

                eq.textContent += Math.sqrt()
                break;
        }
    }
}

// 5+5*3/78
/*
    contOp=0
    while(contOp <=1)
    {
        if(EhOp(c1.textContent[i]))
            contOp++;
        eq += c1.textcontent[i];
        pos++
        i++
    }

    EhOP(val)
    {
    
    let vef=false;

    for(let i=0; i<op.length(); i++)
        if(val == op[i].getAttribute("data-value"))
            vef = true

    return vef;
    }

 */