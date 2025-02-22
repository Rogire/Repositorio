const AboutBtn = document.querySelector('.aboutBtn');
const Select = document.querySelector('select');

AboutBtn.addEventListener('click', e=>
{
    e.preventDefault();
    console.log("teste");
    let vef = document.querySelector('.contFlex');
    if(vef == null)
        createAbout();
    else
        document.body.removeChild(document.querySelector('.contFlex'));
});

const createAbout = ()=>{
    let divDin  = document.createElement('div');
    let pDin = document.createElement('p');
    pDin.textContent= "Esse site foi feito para ser um template, e falar sobre laranjas."

    divDin.appendChild(pDin);
    divDin.classList.add('contFlex');
    divDin.classList.toggle('show');

    document.body.append(divDin);
}

Select.addEventListener('change', e=>{
    e.preventDefault();

    console.log(Select.value);
    console.log(document.querySelector('.artFlex') === null);

    if(document.querySelector('.artFlex') !== null)
        document.body.removeChild(document.querySelector('.artFlex'));

    if(Select.value === "Desc")
        if(document.querySelector('.artFlex') === null)
            createArt(1);
    else if(Select.value === "Maior")
        createArt(2);
});

const createArt = (tipo)=>{
    let divDin  = document.createElement('div');
    let pDin = document.createElement('p');
    let imgDin = document.createElement('img');

    imgDin.setAttribute('src', "html/formularioData/estilo/imagens/laranjao.jpg");

    if(tipo === 1)
    {
        pDin.textContent= "A laranja é um fruto originário da Ásia, mais precisamente da região situada entre a Índia e o Sudeste asiático. O seu cultivo ter-se-á iniciado " +
            "há cerca de 7000 anos, presumindo-se que os primeiros pomares de laranjeiras se desenvolveram no primeiro milénio, na China."

        divDin.appendChild(pDin);
        divDin.classList.add('artFlex');
        divDin.classList.toggle('show');
    }
    else if(tipo === 2)
    {
        pDin.textContent= "A maior laranja do mundo é do interior do Tocantins, pesa sete quilos e duzentos gramas. e mede um metro e sete centímetros de diâmetro."
        divDin.appendChild(pDin);
        //divDin.appendChild(imgDin);

        divDin.classList.add('artFlex');
        divDin.classList.toggle('show');
    }
    document.body.append(divDin);
}
