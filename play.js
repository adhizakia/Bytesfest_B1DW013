gsap.registerPlugin(ScrollTrigger);

// HERO
const heroImg1 = document.getElementById("play1")
const heroImg2 = document.getElementById("play2")
const heroImg3 = document.getElementById("play3")

window.addEventListener("scroll", function(e){
  var scrollX = this.window.pageYOffset
  heroImg1.style.transform = "translateX("+scrollX+"px)"
  heroImg2.style.transform = "translateX(-"+scrollX+"px)"
  heroImg3.style.transform = "translateX("+ .5* scrollX+"px)"
})
// HERO

// SHOP
const boxItemShop = document.querySelector(".shop .right .boxShop")
const imgShop = document.querySelector(".shop .left")
const triggerShop = document.querySelector(".shop h2")

gsap.set(boxItemShop,{
  scrollLeft:560,
  opacity:0
})
gsap.set(imgShop,{
  y:100,
  opacity:0
})

gsap.to(imgShop,{
  scrollTrigger:{
    trigger:triggerShop,
    start:"bottom+=300 bottom",
    toggleActions:"restart none none reverse"
  },
  y:0,
  opacity:1,
  duration:.8
})

gsap.to(boxItemShop,{
  scrollTrigger:{
    trigger:triggerShop,
    start:"bottom+=300 bottom",
    toggleActions:"restart none none reverse"
  },
  scrollLeft:0,
  opacity:1,
  duration:.8
})


// SHOP
