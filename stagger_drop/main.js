gsap.to('.demo', {opacity:1})

const blue = document.querySelectorAll('.blue')
const restart = document.querySelector('.restart')
const animation = gsap.timeline()
animation.from(blue, {y:-200, duration:1, stagger:0.3, ease:'back'})
.to(blue, {y:200, duration:1, opacity:0, stagger:0.3, ease:'back.in'}, '+=1')

restart.addEventListener('click', () => {
    animation.restart()
})