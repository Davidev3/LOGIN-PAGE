const form = document.getElementById("login-form");
const popup = document.getElementById("popup");
const popupMsg = document.getElementById("popup-msg");
const popupClose = document.getElementById("popup-close");
let popupTimer;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  showPopup("Demo only — no authentication was performed.", true);
});

document.querySelectorAll("[data-demo-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPopup("This feature is not available in the demo.", false);
  });
});

popupClose.addEventListener("click", () => popup.classList.remove("show"));

function showPopup(message, success) {
  clearTimeout(popupTimer);
  popupMsg.textContent = message;
  popup.classList.toggle("success", success);
  popup.classList.add("show");
  popupTimer = setTimeout(() => popup.classList.remove("show"), 2500);
}

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
const particles = Array.from({ length: 100 }, () => ({
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  r: Math.random() * 2 + 1,
  dx: Math.random() * 0.5 - 0.25,
  dy: Math.random() * 0.5 - 0.25,
}));

function resizeCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(30,144,255,0.6)";
    ctx.fill();
    p.x = (p.x + p.dx + canvas.width) % canvas.width;
    p.y = (p.y + p.dy + canvas.height) % canvas.height;
  }
  requestAnimationFrame(animateParticles);
}
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) animateParticles();
