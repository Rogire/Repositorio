const hora = document.querySelector("input#hora");
const min = document.querySelector("input#min");
const seg = document.querySelector("input#seg");

const TimeElements = [hora, min, seg]

const horaCR = document.querySelector("span#spCronoH");
const minCR = document.querySelector("span#spCronoM");
const segCR = document.querySelector("span#spCronoS");
const msCR = document.querySelector("span#spCronoMS");

const TimeElementsCR = [horaCR, minCR, segCR, msCR];
const HCRV = horaCR.getAttribute("data-value")
const MCRV = minCR.getAttribute("data-value");
const SCRV = segCR.getAttribute("data-value");
const MSCRV = msCR.getAttribute("data-value");

const initTimerBtn = document.querySelector("button#PP");
const initCronoBtn = document.querySelector("button#CronoInit")
const pauseCronoBtn = document.querySelector("button#CronoPause");

const addTimeToTimer = document.querySelector("button#addTime");
const newT = document.querySelector("button#addNewTimer");
const listTimers = document.querySelector("div.CLeft");
const opts = document.querySelectorAll('[opt=optSel]');
const cabeca = document.querySelector("div.cabeca");
const playB = document.createElement("button");
const pauseB = document.createElement("button");
const alarm = document.createElement("audio");
const Values = [];

let timer, timerCR;
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
  }
}

initTimerBtn.addEventListener("click",
  ()=>{
    if(hora.value == 0 && min.value == 0 && seg.value == 0)
      return;

    if(initTimerBtn.classList.contains("inactive"))
    {
      if(Values.length == 0)
      {
        Values[0] = hora.value
        Values[1] = min.value
        Values[2] = seg.value
      }

      vef = false;
      initTimerBtn.classList.remove("inactive");
      initTimerBtn.classList.add("active");
      initTimerBtn.textContent = "Pausar";

      timer = setInterval(function time() {
      if(seg.value >=0)
          seg.value--;
      if (seg.value < 10 && seg.value.length == 1)
        seg.value = "0" + seg.value;

      document.title = `${hora.value}:${min.value}:${seg.value}`;
            
      if (seg.value < 0) 
        formatTm(true)
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

addTimeToTimer.addEventListener("click",()=>{
    if (min.value < 59 && (Number(min.value) + 5)<59)
            min.value = Number(Number(min.value) + 5);
    else if (Number(min.value) + 5 > 59) 
    {
      hora.value = Number(hora.value)+1;
      min.value = (Number(min.value) + 5)-60;
    }

    formatTm(false)
});

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
    clearInterval(timer);
    initTimerBtn.classList.remove("active");
    initTimerBtn.classList.add("inactive");
    initTimerBtn.textContent = "Iniciar";
    seg.value = "00";
    document.title = "Timer";

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

initCronoBtn.addEventListener("click",
  ()=>{
      if(!initCronoBtn.classList.contains('active'))
      {
        initCronoBtn.textContent = "Pausar"
        initCronoBtn.classList.remove("inactive");
        initCronoBtn.classList.add('active');

        timerCR = setInterval(function time() 
        {
          msCR.textContent = Number(msCR.textContent)+1;
          formatCR();
        }, 10);
      }
      else
      {
        initCronoBtn.textContent = "Iniciar";
        initCronoBtn.classList.remove("active");
        initCronoBtn.classList.add("inactive");
        clearInterval(timerCR);
      }
  }
)

const formatCR= 
()=>{
  auxFR(msCR, segCR, 100, true);
  auxFR(segCR, minCR, 60,  true);
  auxFR(minCR, horaCR, 60, true);
}

const formatTm = 
(ehPraRodar)=>
  {
    if (hora.value == 0 && min.value == 0 && seg.value == -1) 
      acabou();

    if (hora.value.length <2) hora.value = "0"+hora.value;
    if (min.value > 60 || min.value == "" ) 
      min.value = "00";
    else if (min.value.length < 2)
      min.value = "0" + min.value;
    
    if (seg.value > 60 || seg.value == "" || seg.value < 0) seg.value = "00";
    
    if(ehPraRodar)
    {
      //TODO: Arrumar isso aqui direito (quando roda pra hora roda pro minuto duas vezes sem mexer nos segundos)

      if(hora.value > 0)
      {
        if(min.value>0)
          auxFR(min, seg, 59, false);
        else
        {
          auxFR(hora, min, 59, false);
          if (res) seg.value = "59";
        }
      }
      else
        auxFR(min, seg, 59, false);
    }
    
  };

/* 
Args:
el1, el2: time elements to make comparison
ft: int stop flag
ac: boolean to if its timer or cronometer usage
*/
const auxFR=
(el1, el2, ft, ac)=>{
  t = false;
  if(ac) 
  {
    if(Number(el1.textContent) >= ft)
    {
      el2.textContent = Number(el2.textContent)+1;
      el1.textContent = "00";
    }
  }
  else 
  {
    if (Number(el1.value) > 0) 
    {
      el1.value = Number(el1.value) - 1;
      el2.value = ft;

      t = true;
    }
  }

  if (el1.textContent == "") 
  {
    //case Timer
    el1.value = changePrefix(el1.value, el2.value)[0];
    el2.value = changePrefix(el1.value, el2.value)[1];
  } //case cronometer
  else 
  {
    el1.textContent = changePrefix(el1.textContent, el2.textContent)[0];
    el2.textContent = changePrefix(el1.textContent, el2.textContent)[1];
  }
  
  return t;
}
const changePrefix = (pel1, pel2)=>
  {
  if (Number(pel1) < 10 && pel1.length < 2)
    pel1 = "0" + pel1;

  if (Number(pel2) < 10 && pel2.length < 2)
    pel2 = "0" + pel2;

  return [pel1, pel2]
}

pauseCronoBtn.addEventListener("click",()=>{
  if(initCronoBtn.classList.contains("active"))
  {
    initCronoBtn.textContent = "Iniciar";
    initCronoBtn.classList.remove("active");
    initCronoBtn.classList.add("inactive");
    clearInterval(timerCR);
  }
  
  TimeElementsCR.forEach((element)=>{
    element.textContent = "0"
  });
  formatCR();
})