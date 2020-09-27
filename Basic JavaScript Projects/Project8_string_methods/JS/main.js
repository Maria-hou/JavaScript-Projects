// This function uses the concat() method
function Questions_function (){
    var ques_1 = "Will covid ever be over? ";
    var ques_2 = "What is your favorite holiday? ";
    var ques_3 = "What does happiness feel like? ";
    var ques_4 = "What would you do if you woke up as a dog one day? ";
    var ques_5 = "How would you describe color to a blind person? ";
    var ques_6 = "What is a crime that God would not forgive you for? ";
    var ques_list = ques_1.concat(ques_2, ques_3, ques_4, ques_5, ques_6);  //Here is where we actually concatenate all of the variables into one
    document.getElementById("Questions").innerHTML= ques_list;              // Output the complete list
}

// This function uses the slice() method
function Slice_function() {
    var sentence = "In the mornings I take Chemistry.";
    var subject = sentence.slice(23, 32);                   // Here we are isolating the characters in index between 23 and 32- which is 'Chemisty'
    document.getElementById("Subject").innerHTML= subject;  // Output the subject which should say 'Chemistry'
}

// This function uses .toUpperCase to switch the string to all uppercased letters
function Upper_function() {
    var text = document.getElementById("Convert").innerHTML;
    document.getElementById("Convert").innerHTML = text.toUpperCase();
}

// This funciton uses search() to identify the index of the first instance of "the"
function Search_function() {
    var str = document.getElementById("Search").innerHTML;
    var location = str.search("the");                       //We give the idex the variable name of location
    document.getElementById("Search").innerHTML = location;
}

// This function uses toString to convert a number to a string
function NumString_function() {
    var x= 252;
    document.getElementById("Num_2_string").innerHTML = x.toString();
}

// This functions shortens a number into however many characters you allow
function Shorten_function() {
    var x = 73249.7993027442;
    document.getElementById("Precision").innerHTML = x.toPrecision(8);   // This should now only contian 3 decimals
}

// This function uses toFixed() to fix a number to however many decimals allowed
function Fixed_function() {
    var x = 73249.7993027442;
    document.getElementById("Fixed").innerHTML = x.toFixed(2);
}

// This function uses the valueOf() method to return the primitive type of the variable
function Value_function() {
    var x= 3735.123;
    document.getElementById("Primitive").innerHTML = x.valueOf();
}