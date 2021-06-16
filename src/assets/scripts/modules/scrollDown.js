const arrowDown = document.querySelector('.scroll-down')

// console.log(arrowDown)
arrowDown.addEventListener('click', (e)=> {
    e.preventDefault();
    window.scrollTo({
        top:1000,
        behavior: "smooth"
    });
})


// const scrollBtn = document.getElementById('scroll-btn');

// scrollBtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// })
// document.addEventListener('scroll', () => {
//     const currentCoords = window.pageYOffset;
//     const coordWhileShowBtn = 100;
//     if (currentCoords > coordWhileShowBtn) {
//         scrollBtn.classList.remove('scroll--hidden');
//     } else {
//         scrollBtn.classList.add('scroll--hidden');
//     }

// })