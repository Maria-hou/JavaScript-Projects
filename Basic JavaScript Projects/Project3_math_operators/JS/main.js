// This function adds two numbers together
function Add_Function() {
    var addition = 3 + 7;
    document.getElementById("Math").innerHTML = "3 + 7 = " + addition;  // This prints the end result when called by the id "Math"
}

// This function subtracts a number from another
function Sub_Function() {
    var subtraction = 21 - 2;
    document.getElementById("Second").innerHTML = "21 - 2 = " + subtraction;  // This prints the end result when called by the id "Second"
}

// This function multiplies two numbers together
function Mult_Function(){
    var multiplication = 4 * 6;
    document.getElementById("Third").innerHTML = " 4 x 6 = " + multiplication;  // This prints the end result when called by the id "Third"
}    

// This function divides two numbers 
function Div_Function() {
    var division = 25 / 5;
    document.getElementById("Fourth").innerHTML = " 25 / 5 = " + division;  // This prints the end result when called by the id "Fourth"
}

// This function outputs the remainder from dividing two numbers
function Mod_Function() {
    var modulus = 27 % 4;
    document.getElementById("Fifth").innerHTML = "When you divide 27 by 4 you have a remainder of: " + modulus;  // This prints the end result when called by the id "Fifth"
}

// This function returns the opposite of the original number
function Negation_Operator() {
    var x = 14;
    document.getElementById("Sixth").innerHTML = -x;  // This prints the end result when called by the id "Sixth"
}

// This function increments the original number by 1
function Increment_Function() {
    var increment = 12.23;
    increment++;
    document.getElementById("Seventh").innerHTML = increment; // This prints the end result when called by the id "Seventh"
}

// This function decrements the original number by 1
function Decrement_Function() {
    var decrement = 59;
    decrement--;
    document.getElementById("Eighth").innerHTML = decrement;  // This prints the end result when called by the id "Eighth"
}

// This function outputs a random number from 0 to 23
function Random_Function() {
    document.getElementById("Ninth").innerHTML = (Math.random() * 23);  // This prints the end result when called by the id "Ninth"
}

// This function outputs the absolute value (positive) of the original number
function Absolute_Function() {
    var absolute = -24;
    document.getElementById("Tenth").innerHTML =(Math.abs(absolute));  // This prints the end result when called by the id "Tenth"
}