/*const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventlistener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closet("[data-carousel]")
      .querySelector("[data-slides]")
    
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
}) */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; }
    slides[slideIndex-1].style.display = "block"; 
  
}