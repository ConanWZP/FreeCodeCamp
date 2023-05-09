function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)    // добавили в конец массива элемент
    let removedItem = arr.shift() // удалили первый элемент
    return removedItem;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr)); // Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // 1
console.log("After: " + JSON.stringify(testArr)); // After: [2,3,4,5,6]