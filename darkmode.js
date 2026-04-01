
const form = document.getElementById("login-form");
const popup = document.getElementById("popup");
const popupMsg = document.getElementById("popup-msg");
const popupClose = document.getElementById("popup-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const senha = form.senha.value.trim();

  if(email === "" || senha === "") {
    showPopup("Preencha todos os campos!", false);
    return;
  }

  
  showPopup("Login realizado com sucesso!", true);
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("show");
});

function showPopup(message, success) {
  popupMsg.textContent = message;
  popup.style.color = success ? "#0f0" : "#f33";
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2500);
}

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    dx: Math.random()*0.5-0.25,
    dy: Math.random()*0.5-0.25
  });
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let p of particles){
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = 'rgba(30,144,255,0.6)';
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if(p.x>canvas.width) p.x=0;
    if(p.x<0) p.x=canvas.width;
    if(p.y>canvas.height) p.y=0;
    if(p.y<0) p.y=canvas.height;
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();
