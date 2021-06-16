const arrowDown = document.querySelector('.scroll-down')

// console.log(arrowDown)
arrowDown.addEventListener('click', (e)=> {
    e.preventDefault();
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
})

