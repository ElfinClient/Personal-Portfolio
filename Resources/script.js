const switchModeBtn = document.querySelector('mode-switch')

switchModeBtn.addEventListener('click', () => {
    document.body.classList.toggle()
})

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.toggle(".about-me-dark-mode");
 }