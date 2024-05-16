const hora = document.querySelector(".hora");
const min = document.querySelector(".min");
const seg = document.querySelector(".seg");

const PP = document.querySelector("button#PP");
const add = document.querySelector("button#addTime");
const newT = document.querySelector("button#addNewTimer");
const listTimers = document.querySelector("div.CLeft");
const opts = document.querySelectorAll('[opt=optSel]');
const cabeca = document.querySelector("div.cabeca");
const playB = document.createElement("button");
const pauseB = document.createElement("button");

let timer;
let alarm = document.createElement("audio");
alarm.src = opts[0].value;

hora.addEventListener("change",()=>{
    if(hora.value.length >2 || hora.value < 0)
        hora.value = "00";
})
min.addEventListener("change", () => {
  if (min.value.length > 2 || min.value < 0 || min.value > 60)
    min.value = "00";
});
seg.addEventListener("change", () => {
  if (seg.value.length > 2 || seg.value < 0 || seg.value > 60)
    seg.value = "00";
});

PP.addEventListener("click",()=>{
    if(PP.classList.contains("inactive"))
    {
            PP.classList.remove("inactive");
            PP.classList.add("active");
            PP.textContent = "Pausar";
            if (seg.value >= 1) seg.value--;
            if (seg.value < 10 && seg.value.length == 1)
            seg.value = "0" + seg.value;

            timer = setInterval(function time() {
            if(seg.value >=1)
                seg.value--;
            if (seg.value < 10 && seg.value.length == 1)
              seg.value = "0" + seg.value;

            if (seg.value == 0) 
            {
                if(min.value>0)
                {
                    min.value--;
                    seg.value = 59;
                    formatar();
                }
                else if(min.value ==0 && hora.value >0)
                {
                    hora.value--;
                    min.value= 59;
                    formatar();
                }
                else   
                    formatar();
            }
            }, 1000);
    }
    else if(PP.classList.contains("active"))
    {
        PP.classList.remove("active");
        PP.classList.add("inactive");
        PP.textContent = "Iniciar";
        clearInterval(timer);
    }
});
add.addEventListener("click",()=>{
    if (min.value < 59 && Number(Number(min.value) + 5)<59)
            min.value = Number(Number(min.value) + 5);
    if(min.value.length <2) min.value = '0'+min.value;
});
const formatar=()=>{
    if (min.value == 0 && hora.value > 0) hora.value--;
    if (hora.value < 10 && hora.value.length == 1) hora.value = "0" + hora.value;
    if (min.value < 10 && min.value.length == 1) min.value = "0" + min.value;

    if (hora.value == 0 && min.value == 0 && seg.value == 0) 
    {
      alarm.play();
      window.alert("Acabou o timer");
      clearInterval(timer);
      PP.classList.remove("active");
      PP.classList.add("inactive");
      PP.textContent = "Iniciar";
    }
}
console.log(alarm.src)
newT.addEventListener("click",()=>{
    document.body.style.backgroundColor="black";
    //cria div container geral
    let setNT=document.createElement("div");
    //cria div container dos inputs e inputs
    let tNewT = document.createElement("div");
    let inpHrNT= document.createElement("input");
    let inpMinNT = document.createElement("input");
    let inpSegNT = document.createElement("input");
    //cria div container dos botoes e os botoes 
    let btns = document.createElement("div");
    let conf = document.createElement("button");
    let cancel = document.createElement("button");
    let inpName = document.createElement("input");
    //configura tipo dos inputs
    inpHrNT.type = "number";
    inpMinNT.type = "number";
    inpSegNT.type = "number";
    inpName.type = "text";

    conf.textContent= "confirmar";
    cancel.textContent= "cancelar";
    inpName.placeholder="Digite o nome do timer";
    inpName.style.margin="3px";

    inpHrNT.value = "00";
    inpMinNT.value = "00";
    inpSegNT.value = "00";
    //configurações de classe dos elementos HTML
    setNT.classList.add("setNT");
    tNewT.style.display = "flex";
    btns.style.display = "flex";
    inpHrNT.classList.add("tInp");
    inpMinNT.classList.add("tInp");
    inpSegNT.classList.add("tInp");
    conf.classList.add("btn");
    cancel.classList.add("btn");
    inpHrNT.style.fontSize="2.5em";
    inpMinNT.style.fontSize="2.5em";
    inpSegNT.style.fontSize="2.5em";
    //Append dos elementos nos seus containers e no corpo
    tNewT.appendChild(inpHrNT);
    tNewT.appendChild(inpMinNT);
    tNewT.appendChild(inpSegNT);
    btns.appendChild(conf);
    btns.appendChild(cancel);
    btns.appendChild(inpName);
    setNT.appendChild(tNewT);
    setNT.appendChild(btns);
    document.body.appendChild(setNT);

    cancel.addEventListener("click",()=>{
        document.body.removeChild(setNT);
        document.body.style.backgroundColor="transparent";
    })

    conf.addEventListener("click",()=>{
        //cria elementos
        let itenTimer = document.createElement("div");
        let ContTimer = document.createElement("div");
        let Hr = document.createElement("div");
        let Min = document.createElement("div");
        let Seg = document.createElement("div");
        let itenTimerName = document.createElement("p");
        let deleteIten = document.createElement("button");
        //valores texto dos elementos
        itenTimerName.textContent = inpName.value;
        Hr.textContent = inpHrNT.value.length < 2 ? "0" + inpHrNT.value : inpHrNT.value;
        Min.textContent = inpMinNT.value.length < 2 ? "0" + inpMinNT.value : inpMinNT.value;
        Seg.textContent = inpSegNT.value.length < 2 ? "0" + inpSegNT.value : inpSegNT.value;
        deleteIten.textContent = "excluir";
        //classe dos elementos
        itenTimer.classList.add("itenTimer");
        deleteIten.classList.add("btn");
        Hr.classList.add("iten");
        Min.classList.add("iten");
        Seg.classList.add("iten");
        ContTimer.style.display = "flex";
        //deletar o item da lista
        deleteIten.addEventListener("click",()=>{
            listTimers.removeChild(itenTimer);
        })

        itenTimer.addEventListener("click",()=>{
            hora.value = Hr.textContent;
            min.value = Min.textContent;
            seg.value = Seg.textContent;
        })

        Hr.addEventListener("change", () => {
          if (hora.value.length > 2 || hora.value < 0) hora.value = "00";
        });
        Min.addEventListener("change", () => {
          if (min.value.length > 2 || min.value < 0 || min.value > 60)
            min.value = "00";
        });
        Seg.addEventListener("change", () => {
          if (seg.value.length > 2 || seg.value < 0 || seg.value > 60)
            seg.value = "00";
        });


        //append do elementos em seus containers
        ContTimer.appendChild(Hr);
        ContTimer.appendChild(Min);
        ContTimer.appendChild(Seg);
        itenTimer.appendChild(itenTimerName);
        itenTimer.appendChild(ContTimer);
        itenTimer.appendChild(deleteIten);
        listTimers.appendChild(itenTimer);

        console.log(Hr);
        document.body.removeChild(setNT);
        document.body.style.backgroundColor = "transparent";
    })
})//TODO: fix new timer insertion bug

for(let i=0; i<opts.length;i++)
{
    opts[i].addEventListener("click",()=>{
    alarm.src = opts[i].value;
    })
}

//Play selected audio button
playB.classList.add("btn");
pauseB.classList.add("btn");
playB.textContent = "play";
pauseB.textContent = "pause";
cabeca.appendChild(playB);

playB.addEventListener("click", () => {
    alarm.play();
    cabeca.removeChild(playB);
    cabeca.appendChild(pauseB);
});

pauseB.addEventListener("click",()=>{
    alarm.pause();
    cabeca.removeChild(pauseB);
    cabeca.appendChild(playB);
})