var cursor = document.querySelector(".cursor")
var mouseX = 0
var mouseY = 0
const cursorScale = document.querySelectorAll(".cursorScale")
gsap.to({}, 0.016,{
  repeat: -1,

  onRepeat:function(){
    gsap.set(cursor, {
      left :mouseX,
      top: mouseY
    })
  }
})

window.addEventListener("mousemove", function(e){
  mouseX = e.clientX
  mouseY = e.clientY
})

cursorScale.forEach(text => {
  text.addEventListener("mousemove", function(e){
    cursor.classList.add("grow")
  })
  text.addEventListener("mouseleave", function(e){
    cursor.classList.remove("grow")
  })
});