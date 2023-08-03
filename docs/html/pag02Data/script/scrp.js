let escu = document.getElementById('esca')

escu.addEventListener('click', function () {
    let modo = document.getElementById('corpo')
    let claro = document.getElementById('cabeçalho')

    modo.classList.toggle('active');
    if (modo.classList.contains('active')) {
        modo.classList.toggle('inactive')
    }
    
    claro.classList.toggle('active');
    if (claro.classList.contains('active')) {
        claro.classList.toggle('inactive')
    }
})