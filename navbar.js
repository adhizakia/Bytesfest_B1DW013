const nav = document.querySelector("nav")
var lastScroll = 0
window.addEventListener("scroll", function(e){
  var scrollVal = this.window.pageYOffset
  if(ham.classList.length == 1){
    if(scrollVal > 0){
    nav.style.backgroundColor = "#191919"
    }else{
      nav.style.backgroundColor ="transparent"
    }

    if(scrollVal > lastScroll){
      nav.style.top = "-100px"
    }else{
      nav.style.top = 0
    }

    
    lastScroll = scrollVal
  }

})

const ham = document.querySelector(".ham")
const mobileNav = document.querySelector(".mobileNav")
ham.addEventListener("click", function(){
  if(ham.classList.length == 1){
    ham.classList.add("navActive")
    mobileNav.style.transform = "translateX(0)"
  }else{
    ham.classList.remove("navActive")
    mobileNav.style.transform = "translateX(-100%)"
  }
})