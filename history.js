// HERO
const heroImg1 = document.getElementById("history1")
const heroImg2 = document.getElementById("history2")
const heroImg3 = document.getElementById("history3")

window.addEventListener("scroll", function(e){
  var scrollX = this.window.pageYOffset
  heroImg1.style.transform = "translateX("+scrollX+"px)"
  heroImg2.style.transform = "translateX(-"+scrollX+"px)"
  heroImg3.style.transform = "translateX("+ .5* scrollX+"px)"
})
// HERO
// SPLIT TYPE
const splitTypes = document.querySelectorAll(".reveal-type")

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types:'chars, words'})
  
  gsap.from(text.chars,{
    scrollTrigger:{
      trigger:char,
      start:'top 80%',
      end:'top 20%',
      scrub:true,
      markers:false
    },
    y:30,
    opacity:0,
    stagger:0.1
  })
})

// SPLIT TYPE

// JEU
const allJeu = document.querySelectorAll(".jeu .boxJeu .coverImg")
var index = 1
allJeu.forEach(jeu => {
  jeu.addEventListener("mouseover", ()=>{
    index = Number(jeu.getAttribute("value"))
    for (let i = 0; i < 5; i++) {
      if(allJeu[i].classList.length == 2){
        allJeu[i].classList.remove("jeuActive")
      }else if( i == index-1){
        allJeu[i].classList.add("jeuActive")
      }
    }
  })
});

const h2Jeu = document.querySelector(".jeu h2")

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger : h2Jeu,
  start : "top center",
  onEnter:() =>{
    allJeu[2].classList.add("jeuActive")
  }
})

// JEU

// CHAL
const h2Chal = document.querySelector(".challenge h2")
const imgMain = document.querySelector(".mainImg")
const imgSub = document.querySelectorAll(".subImg")

gsap.set(imgMain, {
  y: 120,
  opacity:0.8
})

gsap.to(imgMain, {
  scrollTrigger:{
    trigger:h2Chal,
    start:"top center",
    toggleActions:"restart none none reverse"
  },
  y:0,
  opacity:1,
  duration:.4,
  immediateRender: false,
})

imgSub.forEach(sub => {
  gsap.set(sub, {
    y:30,
    opacity:0
  })

  gsap.to(sub, {
    scrollTrigger:{
      trigger:imgMain,
      start:"top-=80 center",
      toggleActions: "restart none none reverse"
    },
    y:0,
    opacity:1,
    duration:.6
  })
});
// CHAL

