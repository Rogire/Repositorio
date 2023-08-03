let tome = document.getElementById('tomas')

tome.addEventListener('click', function () {
    let honr = document.getElementById('hidden')
    honr.classList.toggle('active')
    
    if (honr.contains('active')) {
        honr.classList.toggle('inactive')
    }
})