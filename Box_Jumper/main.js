gsap.to('.demo', {opacity:1})

const blue = document.querySelector('.blue')
const black = document.querySelector('.black')
const restart = document.querySelector('.restart')
const animation = gsap.timeline()
animation.to(black, {x:555, duration:1, ease:'none'})
.to(blue, {y:-100, repeat: 1, yoyo:true}, 0.2)

restart.addEventListener('click', () => {
    animation.restart()
})