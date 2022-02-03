

var buttons = document.querySelectorAll("[data-carousel-button]");
var bool=true; //boolean for turning automatic carousel on or off


//FUNCTION FOR AUTOMATIC CAROUSEL AFTER 2000ms
setInterval(() => {
  if(bool){
    var slides=document.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + 1;
  
      if (newIndex < 0) return;
      if (newIndex >= slides.children.length) return;
  
      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
  } 
  
}, 2000);




//FUNCTION FOR BUTTONS
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) return;
    if (newIndex >= slides.children.length) return;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    bool=false;
  });
});
