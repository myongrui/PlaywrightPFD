let middle = document.querySelector('.middle')
let bottom = document.querySelector('.bottom')
let middledist = middle.offsetTop
let middlelength = middle.offsetHeight
let header = document.querySelector('header h1')

window.addEventListener('scroll', event =>{
    let y = window.pageYOffset

    if(y < middledist/2){
        header.innerHTML = "About"
    }
    else if(y > middledist * 1.5){
        header.innerHTML = "About.lifeStyle()"
    }
    else if(y>middledist){
        header.innerHTML = "About.hobbies()"
    }
})


