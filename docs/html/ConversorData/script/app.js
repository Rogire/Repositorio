//elementos DOM
const botao = document.querySelector('form');
const cur1 = document.querySelector('select#cur1');
const cur2 = document.querySelector('select#cur2');
const cur3 = document.querySelector('input#cur3');
const cur4 = document.querySelector('input#cur4');
const Valor = document.querySelector('input#num');


botao.addEventListener("submit", (e) => {
  e.preventDefault();
  let caixa = document.querySelector("section.res");
  caixa.classList.add("active");
  preConvert(caixa);
});


function preConvert(caixa) {
  let currency = cur1.value;
  let currency2 = cur4.value;
  let converter = cur2.value;
  let converter2 = cur3.value;

  const url = `https://v6.exchangerate-api.com/v6/c4e0096d9ce997a326f289f9/latest/${currency}`;
  const url2 = `https://v6.exchangerate-api.com/v6/c4e0096d9ce997a326f289f9/latest/${currency2}`;

  if(currency !=='' && converter !=='' || (currency2 !== '' || converter2 !== ''))
    caixa.textContent = "Selecione apenas um modo";
  else if (currency !== "" && converter !== "") 
    convert(url, converter);
  else if (currency !== "" && converter == "") 
    convert(url, converter2);
  else if (currency == "" && converter !== "") 
    convert(url2, converter);
  else if (currency == "" && converter == "") 
    convert(url2, converter2);
  
}

// função que decodifico o json e calcula a taxa
async function convert(param,convertido) {
    let caixa = document.querySelector("section.res");
    numV=Valor.value;
  try {
    const response = await fetch(param);
        if (!response) throw new Error("Erro de conexão, verifique sua internet");
    const DadosConversao = await response.json();
        if(DadosConversao.result === 'error') throw new Error("Erro");

    //converte o objeto json para array
    keys = Object.keys(DadosConversao.conversion_rates);
    values = Object.values(DadosConversao.conversion_rates);

    let val=0;
    //o valor de i resultante é igual ao index da moeda selecionada na array values
    for (let i = 0; i < keys.length; i++) 
    {
        if(keys[i]==convertido)
        val = i;
    }
    const dadosConvertido = values[val];
    caixa.textContent = (numV/dadosConvertido).toFixed(2);
    console.log(param, convertido, num.value, val);

  } catch (err) {
    let caixa = document.querySelector("section.res");
    caixa.textContent = err.message;
  }
}

