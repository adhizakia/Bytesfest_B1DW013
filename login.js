const loginBtn = document.querySelectorAll(".login")
const backBtn = document.querySelectorAll(".back")

loginBtn.forEach(btn => {
  btn.addEventListener("click", () =>{
    document.location.href = "login.html"
  })
});

backBtn.forEach(btn => {
  btn.addEventListener("click", () =>{
    document.location.href = "index.html"
  })
});