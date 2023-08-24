gsap.to('.demo', {opacity:1})

const blueBoxes = document.querySelectorAll(".blue")
const restart = document.querySelector('.restart')
const pixelsPerSecond = 900 


const masterTl = gsap.timeline()
function animate(box, distance){
  let tl = gsap.timeline()
  tl.to(box, {x:175, ease:"none", duration:1})
  .to(box, {rotation:90, transformOrigin:"50% 100%", duration:0.2}, "-=0.16")
  
  .to(box, {y:distance, ease:"power1.in", duration:distance/pixelsPerSecond}, "-=0.1")
  return tl
}

blueBoxes.forEach((box, index) => {
  let distance = 250 - (index * 55)
  masterTl.add(animate(box, distance), index * 0.6)
})




restart.addEventListener("click", () => {
  masterTl.restart()
})

