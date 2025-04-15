//elementos DOM
const botao = document.querySelector('form');
const cur1 = document.querySelector('select#cur1');
const cur2 = document.querySelector('select#cur2');
const cur3 = document.querySelector('input#cur3');
const cur4 = document.querySelector('input#cur4');
const Valor= document.querySelector('input#num');


botao.addEventListener("submit", (e) => {
  e.preventDefault();
  let caixa = document.querySelector("section.res");
  preConvert(caixa);
});

function preConvert(caixa) {
  let currency = cur1.value;
  let currency2 = cur4.value;
  
  let converter = cur2.value;
  let converter2 = cur3.value;

  const url = `https://v6.exchangerate-api.com/v6/8211c46df263b2f9e0b56e63/latest/${currency}`;
  const url2 = `https://v6.exchangerate-api.com/v6/8211c46df263b2f9e0b56e63/latest/${currency2}`;

  if((currency !=='' || converter !=='') && (currency2 !== '' || converter2 !== ''))
    SetErrorFor("Selecione apenas um modo de conversão", caixa);
  else if ((currency == "" || converter == "") && (currency2 == "" || converter2== ""))
    SetErrorFor("Selecione as moedas", caixa);
  else if(currency !== '' && converter !== '')
    setSucessFor(caixa,url,converter,currency);
  else if(currency2 !== '' && converter2 !== '')
    setSucessFor(caixa, url2, converter2,currency2);
}

//Funções de validação
function SetErrorFor(message,box){
  box.textContent = message;
  box.classList.add('erro');
}
function setSucessFor(box, moeda1, moeda2,M1){
  if(box.classList.contains('erro'))
    box.classList.remove('erro');
    convert(moeda1,moeda2,M1);
}


// função que decodifico o json e calcula a taxa
 async function convert(param,convertido,M1) {
    let caixa = document.querySelector("section.res");
    let numV=Valor.value.replace(/,/g,'.');
  try {
    if(numV<0 || isNaN(numV))
      throw new Error("Selecione um valor válido");
    
    const response = await fetch(param);
        if (!response) 
          throw new Error("Erro de conexão, verifique sua internet");
        
    const DadosConversao = await response.json();
        if(DadosConversao.result === 'error') 
          throw new Error("Erro");

    //converte o objeto json para array
    let keys = Object.keys(DadosConversao.conversion_rates);
    let values = Object.values(DadosConversao.conversion_rates);

    let val=0;
    //o valor de i resultante é igual ao index da moeda selecionada na array values

    for (let i = 0; i < keys.length; i++) 
    {
        if(keys[i]===convertido)
        {
          val = i;
          break;
        }
    }

    const dadosConvertido = values[val];
    let ValConvertido = (numV / dadosConvertido);
    caixa.textContent="";
    console.log(param)
    let format = new Intl.NumberFormat("pt-BR",{style:"currency", currency:M1, minimumFractionDigits:3});
    let formatAnt = new Intl.NumberFormat("pt-BR",{style:"currency", currency:convertido, minimumFractionDigits:3});
    caixa.textContent = `${formatAnt.format(numV)} = ${format.format(ValConvertido)}`;

    caixa.classList.add("active");

  } catch (err) {
    let caixa = document.querySelector("section.res");
    caixa.textContent = err.message;
  }
}

