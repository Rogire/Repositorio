const hora = document.querySelector(".hora");
const min = document.querySelector(".min");
const seg = document.querySelector(".seg");

const TimeElements = [hora, min, seg]

const initTimerBtn = document.querySelector("button#PP");
const addNewTimer = document.querySelector("button#addTime");
const newT = document.querySelector("button#addNewTimer");
const listTimers = document.querySelector("div.CLeft");
const opts = document.querySelectorAll('[opt=optSel]');
const cabeca = document.querySelector("div.cabeca");
const playB = document.createElement("button");
const pauseB = document.createElement("button");

const alarm = document.createElement("audio");

let hrV="00";
let minV="00";
let segV="00";
const Values = [hrV, minV, segV];

let vInit = [];
let timer;
let vef;

alarm.src = opts[0].value;


hora.addEventListener("change",parseSetTime(TimeElements, true))
min.addEventListener("change", parseSetTime(TimeElements, true))
seg.addEventListener("change", parseSetTime(TimeElements, true))

/*
Args:
elements: array with the time elements in this order: hour, minutes, seconds
ref: boolean to if its needed to change the Values array
*/
function parseSetTime(elements, ref)
{
  for(i=0; i<elements.length; i++)
  {
    if(i==0)
    {
      if (elements[i].value < 0 || elements[i].value == "") 
        elements[i].value = "00";
    }
    else 
      if(elements[i].value.length > 2 || elements[i].value < 0 || elements[i].value > 60 || elements[i].value == "")
        elements[i].value = "00";

    if(ref)
      Values[i] = elements[i].value;
  }
}

initTimerBtn.addEventListener("click",()=>{
    if(initTimerBtn.classList.contains("inactive"))
    {
            vef = false;
            initTimerBtn.classList.remove("inactive");
            initTimerBtn.classList.add("active");
            initTimerBtn.textContent = "Pausar";

            formatar(false);

            timer = setInterval(function time() {
            if(seg.value >=0)
                seg.value--;
            if (seg.value < 10 && seg.value.length == 1)
              seg.value = "0" + seg.value;

            document.title = `${hora.value}:${min.value}:${seg.value}`;
            
            if (seg.value < 0) 
              formatar(true)
            
            }, 1000);
    }
    else if(initTimerBtn.classList.contains("active"))
    {
        initTimerBtn.classList.remove("active");
        initTimerBtn.classList.add("inactive");
        initTimerBtn.textContent = "Iniciar";
        document.title = "Timer";
        clearInterval(timer);
    }
});
addNewTimer.addEventListener("click",()=>{
    if (min.value < 59 && Number(Number(min.value) + 5)<59)
            min.value = Number(Number(min.value) + 5);
    if(min.value.length <2) min.value = '0'+min.value;
});

const formatar = (zerou)=>{

  if (min.value > 0 && zerou) 
    {
      min.value--;
      seg.value = 59;
    } 
    else if (min.value == 0 && hora.value > 0) 
    {
      if (seg.value == 0) 
      {
        hora.value--;
        seg.value = 59;
        min.value = 59;
      } 
      else 
      {
        hora.value--;
        min.value = 59;
      }
    }

    if (min.value == 0 && hora.value > 0) 
      hora.value--;

    if (hora.value < 10 && hora.value.length == 1) 
      hora.value = "0" + hora.value;
    
    if (min.value < 10 && min.value.length == 1) 
      min.value = "0" + min.value;

    if(min.value>60 || min.value == "")
       min.value = "00";

    if(seg.value>60 || seg.value == "") 
      seg.value = "00";
    
    if (hora.value == 0 && min.value == 0 && seg.value == 0) 
    {
      clearInterval(timer);
      initTimerBtn.classList.remove("active");
      initTimerBtn.classList.add("inactive");
      initTimerBtn.textContent = "Iniciar";
      document.title = "Timer";
      acabou();
    }
}

// Add new timer to the timer list
newT.addEventListener("click",()=>{
    document.body.style.background =
      "linear-gradient(to bottom,rgba(10, 26, 56,0.9),rgba(63, 37, 21, 0.9))";
    //create the general container div
    let setNT=document.createElement("div");
    //create the inputs and buttons container div
    let tNewT = document.createElement("div");
    //create inputs
    let inpHrNT= document.createElement("input");
    let inpMinNT = document.createElement("input");
    let inpSegNT = document.createElement("input");
    let inpName = document.createElement("input");
    let TimeInputs = [inpHrNT, inpMinNT, inpSegNT];

    //create buttons and buttons div 
    let btns = document.createElement("div");
    let conf = document.createElement("button");
    let cancel = document.createElement("button");

    conf.textContent= "confirmar";
    cancel.textContent= "cancelar";
    inpName.placeholder="Digite o nome do timer";
    inpName.style.margin="3px";

    //configurações de classe dos elementos HTML
    setNT.classList.add("setNT");
    tNewT.style.display = "flex";
    btns.style.display = "flex";

    TimeInputs.forEach((input)=>{
      input.addEventListener("change", parseSetTime(TimeInputs, null));
      input.value = "00";
      input.classList.add("tInp");
      input.style.fontSize = "2.5em";
      input.type = "number";
    })

    conf.classList.add("btn");
    cancel.classList.add("btn");

    //Add elements to body
    tNewT.appendChild(inpHrNT);
    tNewT.appendChild(inpMinNT);
    tNewT.appendChild(inpSegNT);
    btns.appendChild(conf);
    btns.appendChild(cancel);
    btns.appendChild(inpName);
    setNT.appendChild(tNewT);
    setNT.appendChild(btns);
    document.body.appendChild(setNT);

    cancel.addEventListener("click",
    ()=>{
        document.body.removeChild(setNT);
        document.body.style.backgroundColor="transparent";
        document.body.style.background =
          "linear-gradient(to bottom,rgb(10, 26, 56),rgba(63, 37, 21, 0.863))";
    })

    conf.addEventListener("click",
    ()=>{
        // elements to the new div created
        let itenTimer = document.createElement("div"), ContTimer = document.createElement("div");
        let Hr = document.createElement("div"), Min = document.createElement("div"), Seg = document.createElement("div");
        let DivTimeElments = [Hr, Min, Seg];
        let itenTimerName = document.createElement("p"), deleteIten = document.createElement("button");

        parseSetTime(TimeInputs, null)
        itenTimerName.textContent = inpName.value;

        DivTimeElments.forEach((element, index)=>{
          element.textContent = TimeInputs[index].value.length < 2 ? "0" + TimeInputs[index].value : TimeInputs[index].value;

          if(!element.classList.contains("iten"))
            element.classList.add("iten");
        });

        deleteIten.textContent = "excluir";
        //set elements style classes
        itenTimer.classList.add("itenTimer");
        deleteIten.classList.add("btn");
        ContTimer.style.display = "flex";

        //delete item list
        deleteIten.addEventListener("click",()=>{
            listTimers.removeChild(itenTimer);

            TimeElements.forEach((element, index)=>
            {
              element.value = Values[index]
            })
        })

        itenTimer.addEventListener("click",()=>{
            if(itenTimer.parentElement == listTimers)
            {
              TimeElements.forEach((element, index)=>{
                element.value = DivTimeElments[index].textContent;
              })
            }
        })

        //append elements in their containers
        ContTimer.appendChild(Hr);
        ContTimer.appendChild(Min);
        ContTimer.appendChild(Seg);
        itenTimer.appendChild(itenTimerName);
        itenTimer.appendChild(ContTimer);
        itenTimer.appendChild(deleteIten);
        listTimers.appendChild(itenTimer);

        document.body.removeChild(setNT);
        document.body.style.background =
          "linear-gradient(to bottom,rgb(10, 26, 56),rgba(63, 37, 21, 0.863))";
    })
})

opts.forEach((opt)=>{
  opt.addEventListener("click",()=>{
    alarm.src = opt.value
  })
});

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

const acabou = ()=>{
    let endTimer = document.createElement("div"), btns = document.createElement("div");
    let endBtn = document.createElement("button"), resetBtn = document.createElement("button");
    let pEnd = document.createElement("p");

    const fimTimer = setInterval(function time() {
      alarm.play(), alarm.duration;
    });

    document.title = "Fim do timer";
    pEnd.textContent = "Fim do timer";
    endBtn.textContent = "Confirmar";
    resetBtn.textContent= "Reiniciar timer";

    endTimer.classList.add("endTimer")
    endBtn.classList.add("btn");
    resetBtn.classList.add("btn");
    btns.style.display = "flex";
    btns.style.margin = "5px";
    document.body.style.background =
      "linear-gradient(to bottom,rgba(10, 26, 56,0.9),rgba(63, 37, 21, 0.9))";

    btns.appendChild(endBtn);
    btns.appendChild(resetBtn);
    endTimer.appendChild(pEnd);
    endTimer.appendChild(btns);
    document.body.appendChild(endTimer);

    endBtn.addEventListener("click",()=>{
        document.body.removeChild(endTimer);
        alarm.pause();
        clearInterval(fimTimer);

        document.title = "Timer";
        document.body.style.background =
          "linear-gradient(to bottom,rgb(10, 26, 56),rgba(63, 37, 21, 0.863))";
    });

    resetBtn.addEventListener("click",()=>{
      TimeElements.forEach((element, index)=>
      {
        element.value = Values[index]
      })

        clearInterval(fimTimer);
        initTimerBtn.click();
        document.body.removeChild(endTimer);

        document.body.style.background =
          "linear-gradient(to bottom,rgb(10, 26, 56),rgba(63, 37, 21, 0.863))";
    })
}