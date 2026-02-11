// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Interactive feature example
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("interactiveButton");
    button.addEventListener("click", function() {
        alert("Happy Valentine’s Day!");
    });
});