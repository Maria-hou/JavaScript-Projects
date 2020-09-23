// Create the function that contains the dictionary
function my_Dictionary() {

    // This dictionary is all about coffee, and specifies 5 key value pairs
    var Coffee = {
        Area: "Columbian",
        Roast: "Dark",
        Type: "Robusta",
        Flavor: "Caramel",
        Price: "$9.00 per pound",
    };

    //Delete the roast element
    delete Coffee.Roast;

    //From the html code, it will call this function and output the roast element from the coffee dictionary
    // however, since we deleted the roast element, it will show up as undefined
    document.getElementById("Dictionary").innerHTML = Coffee.Roast;
}