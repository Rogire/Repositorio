async function convert() {
  try {
        const url = `https://v6.exchangerate-api.com/v6/c4e0096d9ce997a326f289f9/latest/USD`;
    const response = await fetch(url);
    const DadosConversao = await response.json();
    
    teste= Object.keys(DadosConversao.conversion_rates);
    teste2= Object.values(DadosConversao.conversion_rates);
    cur = 'BRL';

    for(i=0; i<teste.length; i++)
    {
        if(teste[i]==cur)
            console.log(teste[i])
    }

    if (!response) throw new Error("Erro de conexão, verifique sua internet");
  } catch (err) {
    console.log(err.message);
  }
}
convert()
