let tome = document.getElementById('tomas');
const val = tome.value; 

const scroll= (e)=>{
    document.querySelector(e).scrollIntoView({behavior:"smooth"});
}

tome.addEventListener('click', ()=>{
    let honr = document.querySelector('.hidden')
    honr.classList.toggle('active')
    
    if (honr.classList.contains('active')) 
    {
        tome.value='Voltar ao topo'
        scroll('.descer')
    }
    else
    {
        tome.value=val;
        scroll('.main')
    }
    

})