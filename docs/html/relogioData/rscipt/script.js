let didat= document.getElementById('data')
let diHor= document.getElementById('Horas')
let alarme = document.getElementById('tempo')

// função do relógio
const relogio= setInterval( function data(){
    
    let datete= new Date();
    let hora= datete.getHours();
    let min= datete.getMinutes();
    let sec= datete.getSeconds();
    
    let ano= datete.getFullYear();
    let mês= datete.getMonth();
    let dia= datete.getDate();
    
    if(hora < 10){
        hora= '0' + hora
    }
    if (min<10){
        min='0'+ min
    }
    if(sec<10){
        sec='0'+ sec
    }   
    if(dia<10){
        dia='0'+ dia
    }
    // muda a cor do fundo do relógio de acordo com a hora
    if(hora>=06 && hora<12){
        document.body.style.backgroundImage='linear-gradient(to right, #FFB50D, #F5DC01 60% )'
    } else if(hora>=12 && hora<18){
        document.body.style.backgroundImage='linear-gradient(to right, #E05C02, #DE970B 60% )'
    } else{
        document.body.style.backgroundImage='linear-gradient(to right, #113799, #3D096B 60%  )' 
    }
    
''
    //switch para colocar o mês escrito por extenso
    switch(mês){
        case 0: 
        mês= 'Janeiro'
        break
        case 1: 
        mês= 'Fevereiro'
        break
        case 2: 
        mês= 'Março'
        break
        case 3: 
        mês= 'Abril'
        break
        case 4: 
        mês= 'Maio'
        break
        case 5: 
        mês= 'Junho'
        break
        case 6: 
        mês= 'Julho'
        break
        case 7: 
        mês= 'Agosto'
        break
        case 8: 
        mês= 'Setembro'
        break
        case 9: 
        mês= 'Outubro'
        break
        case 10: 
        mês= 'Novembro'
        break
        case 11: 
        mês= 'Dezembro'
        break
    }

    didat.innerHTML=`${dia} de ${mês} de ${ano}`
    diHor.innerHTML=`${hora}:${min}:${sec}`

})