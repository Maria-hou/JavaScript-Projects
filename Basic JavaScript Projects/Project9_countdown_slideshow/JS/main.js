// This function decreases the timer by 1 second until the time runs out
function countdown() {
    var seconds = document.getElementById("seconds").value;       // first get the user input

    // This function actually decreases the time
    function tick() {
        seconds = seconds - 1;          // The is the code that actually decrements the seconds
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);         // This program is pausing for a second before the next number is displayed

        if (seconds == -1) {            // when the variable seconds reaches -1 (rember we started at user input-1) it means that the time is up
            alert("Time's up!");
        }
    }
    tick();     // Call the funtion defined previously here

}

var slideIndex = 1;              //Create variable slideIndex and give it value 1 to display image 1 on default
showSlides(slideIndex);          // This calls the funtion showSlide to show whatever image number/index it is currently on

// Next/previous controls
//This function increases or decreases slideIndex by 1
function plusSlides(n) {          
    showSlides(slideIndex += n);  // Depending on whether the previous or next button is pressed, it adds or subtracts 1 to the slideIndex
}

// Thumbnail image controls 
// This function makes sure each "dot" is associated with the correct slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}


// This function actually shows the slides based on n (slideIndex)
function showSlides(n) {
    var i;

    // All of the slides in the document (5)
    var slides = document.getElementsByClassName("mySlides");
    
    // All of the dots in the document (5)
    var dots = document.getElementsByClassName("dot");
    
    // If slide # is greater than the total number of slides, 
    // you start from 1 again
    if (n > slides.length) {slideIndex = 1}

    // If slide # is less than total number of slides
    if (n < 1) {slideIndex = slides.length}

    // Hide the slides when not called
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Replace each of the dots that has the class "active" with "" (nothing)
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //Set the current slide to display as a block element
    slides[slideIndex-1].style.display = "block";
    
    // Set the curent slide's dot to the "active" class
    dots[slideIndex-1].className += " active";
}