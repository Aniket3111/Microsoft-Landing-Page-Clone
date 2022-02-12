
const hamburger = document.querySelector(".hamburger");
const features = document.querySelector(".features");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    features.classList.toggle("active");
}
