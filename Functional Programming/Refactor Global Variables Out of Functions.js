// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {
    const newArr = [...list]

    newArr.push(bookName);
    return newArr;

    // Change code above this line
}

// Change code below this line
function remove(list, bookName) {
    const newArr = [...list]
    const book_index = newArr.indexOf(bookName);
    if (book_index >= 0) {

        newArr.splice(book_index, 1);
        return newArr;

        // Change code above this line
    }
}


console.log(     add(bookList, "A Brief History of Time")      )