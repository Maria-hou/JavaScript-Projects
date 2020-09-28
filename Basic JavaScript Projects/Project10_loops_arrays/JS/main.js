//This function includes a loop to count down from 10
function Call_Loop() {
    var digit = "";                //This is the variable that we are adding everything to
    var x = 10;                    //We start with 10
    
    // As long as x is greater than -1, we keep iterating
    while (x > -1){           
        digit += x + "<br>";      // Output x and then a line break
        x--;                      // Decrement x after you output it
    }
    document.getElementById("Loop").innerHTML = digit;
}

// This function utilizes .length to count the number of characters in the string
function Length_function() {
    str = "This counts the characters in this sentence.";

    // This would output 44 - including periods and spaces
    document.getElementById("Length").innerHTML = str.length;
}

// We first create an array
var majors = ["Chemistry", "Computer Science", "Biology", "Business", "Political Science", "Film"];

// This is the variable we use to output the elments
var content = "";
var x;                  // This is the counter variable

//This function includes a for loop
function for_Loop() {

    // This is saying that starting with x=0, as long as x is less than the length
    // of the array, we increment x
    for (x = 0; x < majors.length; x++){
        content += majors[x] + "<br>";       //We add the array at index x to content
    }

    // This actuallys outputs the content
    document.getElementById("List_of_Majors").innerHTML = content;
}


// This function contains an array
function Array_function() {
    var Current_activity = [];                  //We creates the variable with an empty array
    
    // We fill the array with 4 different elements/ properties
    Current_activity[0] = "watching Netflix";
    Current_activity[1] = "doing school work";
    Current_activity[2] = "playing with the cat";
    Current_activity[3] = "taking a nap";

    //We output the statment by calling Current_activity[1] which is doing school work
    document.getElementById("Array").innerHTML = "She is currently " + Current_activity[1] + ".";
}


// We create a function that contains a constant vairable
function Constant_function() {

    //We create an object here we some properties
    const House = {real_estate_company: "Howard Hannah", year_built: "1988", model: "mid-centry modern"};
    
    House.price = "$300,000";               // Here we are adding a new property
    House.model = "Spanish villa";          // Here we are changing a property

    // This outputs the statement including the new and changed properties
    document.getElementById("Constant").innerHTML = "My client would like to purchase the " + House.price
    + " " + House.model + "."; 
}

// This is a demonstration of using the let declaration
var rent = "$800";
document.write(rent);
{
    let rent = "$1000";              
    document.write("<br>" + rent);       // This is going to output $1000 since let has block scope
}
document.write("<br>" + rent)            // This would output the original $800

// This function includes a return statement
function Return_function() {
    var d = 10;
    var t = 5;
    return d + t;
}
document.getElementById("Return").innerHTML = Return_function();


// We are using let to create an object with properties
let nail = {
    shape: "oval ",
    color: "white ",
    price: "$50 ",
    materials: "acrylics ",

    // Here we create a function that will use return and this.property
    // to output a statement
    description : function() {
        return "Today I will be getting " + this.color + this.shape
        + this.materials + "and it will cost " + this.price;
    }
};
// This actually calls the description element which contains the function with the statement
document.getElementById("Nails").innerHTML = nail.description();


// This function contains a break element and a continue element
function break_continue() {
    var text = "";

    // Starts at i=0, till i is 19, and we increment i by 1
    for (i = 0; i < 20; i++){

        // We want to skip 13 here
        if (i == 13) {
            continue;
        }

        //We want to break from the loop as it gets to 15, it will not output 15
        if (i == 15) {
            break;
        }

        // This is the variable that holds the thing to output
        text += i + "<br>";
    }
    document.getElementById("break_continue").innerHTML = text;
}