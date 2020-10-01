function displayResult(author) {
    var bookTitle = author.getAttribute("data-popular-books");
    alert(bookTitle + " is the most famous book " + author.innerHTML + " wrote!");
}