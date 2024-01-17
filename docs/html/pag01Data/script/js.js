const hora= document.getElementById('hora');
const relogio= setInterval(function time(){
    let hor= new Date()
    let now= hor.getHours()
    let mow= hor.getMinutes()
    let sow=hor.getSeconds()
    
    if(now< 10) now ='0' + now;
    if(mow < 10)mow='0' + mow;
    if(sow < 10) sow='0' + sow;

    hora.innerHTML=`${now}:${mow}:${sow}`
});


const button=document.querySelector('button.ler');
const button2=document.querySelector('div.ler2');
const button3= document.querySelector('button#bot');

button.addEventListener('click', ()=>{
    let texto=document.querySelector('.card')  
    texto.classList.toggle('active');

    button.textContent='ler mais'
    if(texto.classList.contains('active')){
    button.textContent='ler menos'}
});

button3.addEventListener("click", () => {
  let texto = document.querySelector(".tres");
  texto.classList.toggle("active");

  button3.textContent = "ler mais";
  if (texto.classList.contains("active")) {
    button3.textContent = "ler menos";
  }
});

button2.addEventListener('click',()=>{
    let texto=document.querySelector('.hidden2');
        button2.classList.toggle("active");
        texto.classList.toggle('active');

    if(texto.classList.contains('active'))
        scrollTo('#fut');
    else 
        scrollTo('#cabeçalho');
});

function scrollTo(e){
    document.querySelector(e).scrollIntoView({
        behavior:"smooth"
    });
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        //console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.toggle('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
} );

const hiddenElements= document.querySelectorAll('.card',);
hiddenElements.forEach((el)=>observer.observe(el));
