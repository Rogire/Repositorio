let hora= document.getElementById('hora')

let relogio= setInterval(function time(){
    let hor= new Date()
    let now= hor.getHours()
    let mow= hor.getMinutes()
    let sow=hor.getSeconds()
    
    if(now< 10) now ='0' + now;
    if(mow < 10)mow='0' + mow;
    if(sow < 10) sow='0' + sow;

    hora.innerHTML=`${now}:${mow}:${sow}`
})

let button=document.querySelector('button#ler')

button.addEventListener('click', function(){

    let texto=document.querySelector('.card')
    texto.classList.toggle('active');
    
    button.textContent='ler mais'
    if(texto.classList.contains('active')){
    button.textContent='ler menos'}

})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.toggle('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
} );

const hiddenElements= document.querySelectorAll('.card',);
hiddenElements.forEach((el)=>observer.observe(el));

let escu = document.getElementById('esca')
escu.addEventListener('click',  ()=>{
    let modo = document.getElementById('corpo')
    let claro = document.getElementById('cabeçalho')

    modo.classList.toggle('active');

    claro.classList.toggle('active');

})