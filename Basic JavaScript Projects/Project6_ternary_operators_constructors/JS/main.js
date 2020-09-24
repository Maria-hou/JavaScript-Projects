// This function is used to determine if the user is tall enough to ride
function Ride_Function() {
    var Height, Can_ride;    //Initialize the variables
    Height = document.getElementById("Height").value;    //Get the user input

    // If use input is less than 52, it will display that they are too short, other wise, they can write
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";   
    
    // Output the result to the user
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


// This function is used to determine if the user is old enough to vote
function Vote_Function() {
    var Age, Can_vote;    //Initialize the variables
    Age = document.getElementById("Age").value;       //Get the user input

    //If the user is younger than 18, they cannot vote, otherwise, they can
    Can_vote = (Age >= 18) ? "You are eligible to vote." : "You are too young to vote.";
    document.getElementById("Vote").innerHTML = Can_vote;
}


//This is a constructor function with parameters of Make, Model, Year, and Color
function Vehicle(Make, Model, Year, Color) {
    //this sections gives Vehicle_Make, Vehicle_Model... the value of the corresponding parameter
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//We create a new instance of the class and input the values and variable name
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Use this function to display the results of Erik's car
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model 
    + " manufactured in " + Erik.Vehicle_Year;
}



//This is a constructor function with parameters of Last name, major, grade and gpa
function Student(Last_Name, Major, Grade, GPA) {
    //this sections gives Student_Last_Name, Student_Major... the value of the corresponding parameter
    this.Student_Last_Name = Last_Name;
    this.Student_Major = Major;
    this.Student_Grade = Grade;
    this.Student_GPA = GPA;
}
//We create a new instance of the class and input the values and variable name
var Emily = new Student("Black", "Computer Science", "Sophomore", 3.45);
var Josh = new Student("Clian", "Business", "Freshman", 3.78);
var Michael = new Student("Clifford", "Dentistry", "Junior", 3.88);

// Use this function to display the results of Emily
function Student_Function () {
    document.getElementById("New_and_This").innerHTML = "Josh " +
    Josh.Student_Last_Name + " is a " + Josh.Student_Grade + " "
    + Josh.Student_Major + " major that has a " + Josh.Student_GPA
    + " GPA.";
}

//This is the nested function
function exponent_Function() {
    //The function starts when called in the HTML by the ID of "Nested_Function"
    // Then it continues to the function "Raise()"
    document.getElementById("Nested_Function").innerHTML = Raise();

    //Raise() starts when it is called by the previous function
    function Raise() {
        var Starting_Num = 14;                         //Initialize the starting number

        //We create another function that actually raises the original number to the second power
        function Second_Power () {
            Starting_Num = Math.pow(Starting_Num, 2);  //We use a math operator here 
        }
        Second_Power();            // Call the function
        return Starting_Num;       // Return the number that is now at the second power
    }
}