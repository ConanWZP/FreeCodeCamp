function getIndexToIns(arr, num) {
    arr.push(num)
    let a = arr.sort((a, b) => a - b)
    console.log(a)
    return arr.indexOf(num)
}

console.log(    getIndexToIns([40, 60], 50)       )
