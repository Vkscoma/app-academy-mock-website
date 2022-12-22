// Variables
const hamburgerButton = document.querySelector(".hamburger");
const xButton = document.querySelector(".x--sign");
const navLinks = document.querySelector(".nav-links");

// Event Listeners
hamburgerButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  xButton.style.display = "block";
});

xButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  xButton.style.display = "none";
});
