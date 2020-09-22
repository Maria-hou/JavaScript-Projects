// Create function Turn_Text_Blue
function Turn_Text_Blue () {
    var todayDate = "Today's date is September 21st, 2020.";          // Create variable that displays today's date
    var result = todayDate.fontcolor("blue");                         // Create variable that changes todayDate to a blue font
    document.getElementById("First_Function").innerHTML = result;     // Use the document.getElementByID to return element with the name "First_Function"
}


// Create function getNumber
function getNumber () {
    var sentence = "The current year is ";                            // Create variable with the sentence
    sentence += "2020";                                               // Concatenate the year to the previous sentence
    document.getElementById("Concatenate").innerHTML = sentence;      // Use the document.getElementByID to return element with the name "Concatenate"
}