// The following two functions display true and false using isNaN (Not a Number)
function first_Function() {
    document.getElementById("Test").innerHTML = isNaN("true");       // Returns true is "true" is a string and not a number
}

function second_Function() {
    document.getElementById("Test2").innerHTML = isNaN(12354);       // Returns false since 12354 is a number
}

//The following function displays positive inifinity becuase x is larger than the max floating point number
function infinity_Function() {
    var x= 3.79E372;
    document.getElementById("Infinity").innerHTML = x;
}

//The following function displays negative inifinity becuase x is smaller than the min floating point number
function Neg_Infinity_Function() {
    var y= -3.79E372;
    document.getElementById("Negative").innerHTML = y;
}

// Displays the type of data that false is- boolean
document.write(typeof false);


// This section compares two values and displays true or false
document.write("<br>");
document.write("<br>");
document.write(27 >= 27);    //Returns true since 27 is equal to 27
document.write("<br>");
document.write(82 < 32);     //Returns false since 32 is less than 82


console.log(3+11);           //This prints 14 in the browser console

document.write("<br>");
document.write("<br>");
document.write("ten" + 15);  //This uses cocersion to display ten15

console.log(10<2);           // Returns false in the browser console


//This section of code test if two values are equal 
document.write("<br>");
document.write("<br>");
document.write( 15.25 == 15.25);  //Returns true since the values are the same
document.write("<br>");
document.write ( 16 == (14+7));  //Returns false since the values are not the same
document.write("<br>");


// This section of code is used to test the triple equal sign operator that checks for 
// both value and data type

// First create the variables
var A = "Claudia was here";
var B = "Claudia was here";
var C = 37.25;
var D = "37.25";
var E = 24.75;

//Then compare the variables
document.write("<br>");
document.write(A === B); //Returns true becuase same data type and value
document.write("<br>");
document.write(B === C); //Returns false becuase different data type and value
document.write("<br>");
document.write(C === D); //Returns false becuase different data types but same value
document.write("<br>");
document.write(C === E); //Returns false becuase different balue but same type


//This section of code diplays true and false for the AND opertor 
document.write("<br>");
document.write("<br>");
document.write((10 < 27) && (27 <= 27));  //Returns true since both are true
document.write("<br>");
document.write((10 > 13) && (24 > 13));   //Returns false since 10 is not greater than 13

//This section of code diplays true and false for the OR opertor 
document.write("<br>");
document.write("<br>");
document.write((23.54 >= 22) || (1 > 1)); //Returns true since 23.54 is greater or equal to 22, even though the second is false
document.write("<br>");
document.write((99 < 23) || (3 > 3));     // Returns false since both are false

function not_Function () {
    //This returns true since (42<=23) is false, so therefore with !, it is true
    document.getElementById("Not").innerHTML = !(42 <= 23);
}

function not_Function2 () {
     //This returns false since (67<123) is true, so with !, it is false
     document.getElementById("Not_False").innerHTML = !(67 < 123);
}