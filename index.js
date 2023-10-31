gsap.registerPlugin(ScrollTrigger);


// HERO
const heroImg1 = document.getElementById("home1")
const heroImg2 = document.getElementById("home2")
const heroImg3 = document.getElementById("home3")
const heroImg4 = document.getElementById("home4")
const allItemHero = document.querySelectorAll(".strap .strapSec")
const strap = document.querySelector(".strap")
window.addEventListener("scroll", function(e){
  var scrollY = this.window.pageYOffset
  heroImg1.style.transform = "translateY("+scrollY+"px)"
  heroImg2.style.transform = "translateY(-"+scrollY+"px)"
  heroImg3.style.transform = "translateY("+ .5* scrollY+"px)"
  heroImg4.style.transform = "translateY(-"+scrollY+"px)"
})
allItemHero.forEach(iHero => {
  gsap.set(iHero,{
    width:"0%",
    opacity:0,
  })
});
ScrollTrigger.create({
  trigger :strap,
  start : "top bottom",
  onEnter:() => firstScroll(),
    toggleActions:"none none none none"
})

function firstScroll(e){
  allItemHero.forEach(item => {
  item.style.width = "100%"
  item.style.opacity = 1
  const value = Number(item.getAttribute("data-value"))
  const end = item.getAttribute("data-end")
  var curent = 0
  setInterval(() => {
    if(curent != value){
      curent++
      item.firstElementChild.innerHTML = curent+end
    }else{
      clearInterval()
    }
  }, 30);
});
}
// HERO
// PLAYER CARD
const playerCard = document.querySelector(".boxCard")
playerCard.scrollLeft += 1000


gsap.to(playerCard,{
  scrollTrigger:{
    trigger: playerCard,
    start:"top center",
    toggleActions:"restart none none reverse"
  },
  scrollLeft:0,
  duration:1
})
// PLAYER CARD
// HOME TEMP
const temp1 = document.querySelectorAll(".temp")[0]
const allItemTemp = document.querySelectorAll(".itemTempHome span")
const temp1Span = document.querySelector(".tempHome h2 span")
ScrollTrigger.create({
  trigger :temp1,
  start : "top center",
  onEnter:() => countStart(),
    toggleActions:"restart none none none"
})

function countStart(){
  temp1Span.style.backgroundColor ="#D8FF63"
  temp1Span.parentElement.style.color = "#191919"
  allItemTemp.forEach(item => {
    const value = Number(item.getAttribute("data-value"))
    const end = item.getAttribute("data-end")
    var curent = 0
    setInterval(() => {
      if(curent != value){
        curent++
        item.innerHTML = curent+end
      }else{
        clearInterval()
      }
    }, 30);
  });
}
// HOME TEMP
// TESTIMONIAL
const testiTop = document.querySelector(".bTTop")
const testiBottom = document.querySelector(".bTBottom")
const testiTile = document.querySelector(".testi h2")
gsap.to(testiTop,{
  scrollTrigger:{
    trigger: testiTile,
    start:"top center",
    end:"300px center",
    toggleActions:"restart none none none"
  },
  x:0
})

gsap.to(testiBottom,{
  scrollTrigger:{
    trigger: testiTile,
    start:"top center",
    end:"400px center",
    toggleActions:"restart none none none"
  },
  x:0
})
// TESTIMONIAL

// EVENT
const allEvent = document.querySelectorAll(".event .boxEvent .right .itemEvent")
const bgEvent = document.querySelector(".event .boxEvent .imgEvent")
const textEvent = document.querySelector(".event .boxEvent .imgEvent .eventName")
var index = 1
allEvent.forEach(event => {
  event.addEventListener("mouseover", ()=>{
    index = Number(event.getAttribute("value"))
    for (let i = 0; i < 5; i++) {
      if(allEvent[i].classList.length == 2){
        allEvent[i].classList.remove("eventActive")
      }else if( i == index-1){
        allEvent[i].classList.add("eventActive")
      }
    }
    setGambar(index)
  })
});

function setGambar(val){
  if(val == 1){
    bgEvent.style.backgroundImage = "url('assets/img/home_event_1.png')"
  }else if(val == 2){
    bgEvent.style.backgroundImage = "url('assets/img/home_event_2.png')"
  }else if(val == 3){
    bgEvent.style.backgroundImage = "url('assets/img/home_event_3.png')"
  }else if(val == 4){
    bgEvent.style.backgroundImage = "url('assets/img/home_event_4.png')"
  }else if(val == 5){
    bgEvent.style.backgroundImage = "url('assets/img/home_event_5.png')"
  }
  textEvent.innerHTML = allEvent[val - 1].firstElementChild.firstElementChild.innerHTML
}
// EVENT

