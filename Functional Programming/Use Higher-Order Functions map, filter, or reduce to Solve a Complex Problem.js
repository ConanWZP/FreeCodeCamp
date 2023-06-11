const squareList = arr => {
    // Only change code below this line
    let a = arr.filter(e => e > 0 && Math.floor(e) === e)

    return a.map(e => e**2);
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);