

function rangeOfNumbers(startNum, endNum) {
    let array = []

    if (endNum < startNum) {


        return array
    } else {

        array = rangeOfNumbers(startNum, endNum-1)
        array.push(endNum)
        return array
    }


}


console.log(  rangeOfNumbers(2, 4)   )