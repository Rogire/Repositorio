const Observer = new IntersectionObserver((entries) => {
    entries.map(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.toggle("show")
        } else {
            entry.target.classList.remove("show")
        }
    });
});

const hiddenElements = document.querySelectorAll(".cartao");
const dinamicImages = document.querySelectorAll(".imgD");

hiddenElements.forEach((el) => Observer.observe(el));
dinamicImages.forEach((el)=>Observer.observe(el));
