const btnProb = document.querySelector('#btnProb');
const btnNum = document.querySelector('#btnNum');


btnProb.addEventListener('click', () => createCP());
btnNum.addEventListener('click', () => createCN());

const createCP = ()=>
{
    if(document.querySelector('.divCP') === null)
    {
        let newD = document.createElement("div");
        let btnCont = document.createElement("div");

        btnCont.style.display = "flex";
        btnCont.style.flexDirection = "row";
        btnCont.style.justifyContent = "space-between";
        btnCont.style.width = "25vw";
        btnCont.style.margin = "0";

        newD.classList.add("divCP");
        let btnArr = [];
        for(let i=0; i<3;i++)
        {
            let btn = document.createElement("button");
            btn.setAttribute("id",i);
            btn.addEventListener("click", (e) => CreateCalc(e));
            btn.classList.add("btn");
            btnArr.push(btn);
        }

        btnArr.at(0).textContent = "Combinação";
        btnArr.at(0).style.backgroundColor = "#40a6e1";
        btnArr.at(1).textContent = "Permutação";
        btnArr.at(1).style.backgroundColor = "#40e199";
        btnArr.at(2).textContent = "Coeficiente Multinomial";
        btnArr.at(2).style.backgroundColor = "#d1e140";
        btnArr.forEach(btn => btnCont.appendChild(btn));

        newD.appendChild(btnCont);
        document.body.appendChild(newD);
    }
}

const createCN = ()=>{

}

const CreateCalc = (e) => {
    const btId = Number.parseInt(e.target.id);

    if(document.querySelector("#C") !== null)
        e.target.parentElement.parentElement.removeChild(document.querySelector("#C"));

    else if(document.querySelector("#P") !== null)
        e.target.parentElement.parentElement.removeChild(document.querySelector("#P"));

    else if(document.querySelector("#CM") !== null)
        e.target.parentElement.parentElement.removeChild(document.querySelector("#CM"));

    let inpDiv = document.createElement("div");
    let p = document.createElement("p");
    let pRes = document.createElement("p");
    let v1 = document.createElement("input");
    let v2 = document.createElement("input");
    let btn = document.createElement("button");

    if(btId === 0)
    {
        inpDiv.setAttribute("id","C")
        inpDiv.style.backgroundColor = "#40a6e1";
    }
    else if (btId === 1)
    {
        inpDiv.setAttribute("id","P")
        inpDiv.style.backgroundColor ="#40e199";
    }
    else
    {
        inpDiv.setAttribute("id","CM")
        inpDiv.style.backgroundColor ="#d1e140";
    }


    p.textContent = "Selecione os valores:";
    btn.textContent = "Confirmar";
    v1.setAttribute("type", "number");
    v2.setAttribute("type", "number");

    inpDiv.classList.add("inpD");
    p.classList.add("text");
    pRes.classList.add("text");
    btn.classList.add("btn");
    v1.classList.add("input");
    v2.classList.add("input");

    inpDiv.appendChild(p);
    inpDiv.appendChild(v1);
    inpDiv.appendChild(v2);
    inpDiv.appendChild(btn)

    e.target.parentElement.parentElement.appendChild(inpDiv);

    btn.addEventListener("click", () => {
        console.log(btId);

        switch (btId)
        {
            case 0:
                pRes.textContent = Combinacao(v1.value,v2.value);
                inpDiv.appendChild(pRes);
                break;
            case 1:
                pRes.textContent = Permutacao(v1.value,v2.value);
                inpDiv.appendChild(pRes);
                break;
            case 2:
                break;
            default:
                break;
        }
    });
}

const fatorial = (n)=>
{
    let v = n;

    for(let i = n-1; i>=1;i--)
       v *= i;

    return v;
}

const Combinacao = (v1,v2)=>
{
    return fatorial(v1)/(fatorial(v2)*fatorial(v1-v2));
}
const Permutacao = (v1,v2)=>{
    return fatorial(v1)/fatorial(v2);
}
