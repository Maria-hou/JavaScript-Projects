var X = 3;                              // Creating a global variable
// Create a function that uses both a local and global variable successfully
function Multiply_Number() {
    var Y = 5;                          // Creating a local variable
    document.write (X * Y + "<br>");
}

// Create a function that purposefully has an error due to using an undefined variable
// from the previous function
function Subtract_Number() {
    console.log (Y - X);               // You can use the console.log method to debug
}

// Run these functions
Multiply_Number();
Subtract_Number();



// This function utilizes the Date().getHours element to determine if it 
// late enough at night to go to bed
function get_Date() {
    if (new Date().getHours() >=22) {
        document.getElementById("Greeting").innerHTML = "You should go to bed now!";
    }
    else {
        document.getElementById("Greeting").innerHTML = "Enjoy your day";
    }
     
}


// This function utilizes the Dat().getFullYear element to get the year number
// and determine if you are in the future or not.
// If the year is larger than 2020, you are in the future, otherwise, you are not
function get_Future() {
    if (new Date().getFullYear() >2020) {
        document.getElementById("Fortune").innerHTML = "You are in the future!";
    }
        else {
            document.getElementById("Fortune").innerHTML = "You are not in the future :(";
        }
}


// This function gets user input for their local temperature,
// and if it is below 55 degrees, tells the user to wear a jacket,
// otherwise, it is warm enough to not wear a jacket
function Coat_Function() {
    Temp = document.getElementById("Temp").value;
    if (Temp <= 55){
        Clothes = "You should wear a jacket.";
    }
    else {
        Clothes = "You should not wear a jacket.";
    }
    document.getElementById("Weather").innerHTML = Clothes;
}

// This function uses the Date().getHours element to determine whether
// it is morning, afternoon or evening.
function Time_function() {
    var Time = new Date().getHours();      // Initialize time with the user's hours
    var Reply;                    
    if (Time < 12 == Time > 0) {           // If it is between midnight and noon, it is morning
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {     // If it is after noon and less than 6 pm, it is in the afternoon
        Reply = "It is afternoon time.";
    }
    else {
        Reply = "It is evening time.";     // Otherwise, it is night time
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}