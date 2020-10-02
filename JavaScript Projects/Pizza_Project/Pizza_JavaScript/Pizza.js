//This function outputs the size of the pizza as well as chosen toppings 
//and total price
function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";

    //These are initialized to 0 so we can easy add on to it
    var runningTotal = 0;
    var sizeTotal = 0;

    //this gets an array containing all the different sizes (5 total)
    var sizeArray = document.getElementsByClassName("size");
    
    //this runs through a loop so that the size the user selected is
    //chosen correctly from the sizeArray
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;

            //This adds on the size that the user ordered
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // This section of code changes sizeTotal (or the price) to
    // the corresponding sizes
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;

    //Console.log lets us see the outputs in the browser's console
    //also makes it easier to debug
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
};

//this function gets the number of toppings and adds it to the toal amount owed
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;

    //creating an array allows for more than one topping to be selected
    var selectedTopping = [];

    //this creates an array with all the possible toppings (total of 12 )
    var toppingArray = document.getElementsByClassName("toppings");
  
    //this loop runs through all the options in toppingArray until it finds
    //the corresponding one that the user clicked
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {

            //this makes sure that you add all the toppings selected to the array
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            
            //we add the topping to the running receipt
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    
    //This lets the user get one topping for free
    //if the user gets more than one topping, each additional one
    //is $1
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    //This adds the pizza size total and the topping total
    runningTotal = (runningTotal + toppingTotal);

    //This prints out the corresponding statements into the console
    //is good to use to debug
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    
    //This outputs the recipt we have generated
    document.getElementById("showText").innerHTML = text1;

    //This outputs the total that the user owes
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal + ".00" + "</strong></h3>";
}