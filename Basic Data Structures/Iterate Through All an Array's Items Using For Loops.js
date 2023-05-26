function filteredArray(arr, elem) {

    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
       let a =  arr[i].includes(elem)
        if (!a) {
            newArr.push(arr[i])
        }

    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
