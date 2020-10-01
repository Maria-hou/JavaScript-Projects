function Animal_function() {
    var animal_output;
    var animal = document.getElementById("Animal_Input").value;
    var string = " is a powerful animal!";
    switch(animal) {
        case "Dragon":
            animal_output = "Dragon" + string;
        break;
        case "Panda":
            animal_output = "Panda" + string;
        break;
        case "Fox":
            animal_output = "Fox" + string;
        break;
        case "Tiger":
            animal_output = "Tiger" + string;
        break;
        case "Bear":
            animal_output = "Bear" + string;
        break;
        default:
            animal_output= "Please enter an avatar exactly as written above.";
    }
    document.getElementById("Output").innerHTML = animal_output;
}

function Class_function() {
    var Z = document.getElementsByClassName("Class");
    Z[0].innerHTML = "I have a cat as a pet.";
}

var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

// Create text inside canvas
ctx.font = "35px Sans-serif";
ctx.fillText("What's up", 20,50);

// Create gradient
var canvas2 = document.getElementById("Canvas2");
var ctx2 = canvas2.getContext("2d");
var gradient = ctx2.createLinearGradient(0, 0, 200,0);
gradient.addColorStop(0, "lightblue");
gradient.addColorStop(1, "white");

// Fill with gradient
ctx2.fillStyle = gradient;
ctx2.fillRect(10, 10, 150, 80);