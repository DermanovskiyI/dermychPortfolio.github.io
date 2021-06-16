const arrowUp = document.querySelector('.scroll-up');

arrowUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
})