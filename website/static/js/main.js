
//Home Page
//Loads in background for quicker transition
window.addEventListener('load', function() {
    const background = document.querySelector('.background_home');
    background.style.backgroundPosition = 'center top';  // Ensure it's set initially
});
// Parallax effect for Home Page
document.addEventListener('scroll', function() {
    const background = document.querySelector('.background_home');
    const scrollPosition = window.scrollY;
    background.style.backgroundPositionY = `${-scrollPosition * 0.4}px`;
});

//About Page
//Loads in background for quicker transition
window.addEventListener('load', function() {
    const background = document.querySelector('.background_about');
    background.style.backgroundPosition = 'center top';
});
// Parallax effect
document.addEventListener('scroll', function() {
    const background = document.querySelector('.background_about');
    const scrollPosition = window.scrollY;
    background.style.backgroundPositionY = `${-scrollPosition * 0.4}px`; 
});

//Contact Page
//Loads in background for quicker transition
window.addEventListener('load', function() {
    const background = document.querySelector('.background_contact');
    background.style.backgroundPosition = 'center top';
});
// Parallax effect
document.addEventListener('scroll', function() {
    const background = document.querySelector('.background_contact');
    const scrollPosition = window.scrollY;
    background.style.backgroundPositionY = `${-scrollPosition * 0.4}px`; 
});


//Masonry for illistrations
document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.illistrations');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
    });
});

//Masonry for photos
document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.photos');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
    });
});


// Image Slides
const slides = document.querySelectorAll(".slide")
let slideIndex = getSlideIndexFromURL();
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        prevSlide();
    } else if (event.key === "ArrowRight") {
        nextSlide();
    }
});

// Get the slideIndex from the URL
function getSlideIndexFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("slideIndex"), 10) || 0; // Default to 0 if slideIndex is not provided
}

function initializeSlider(){

    if (slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
    }
    
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if (index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    slideIndex--
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}