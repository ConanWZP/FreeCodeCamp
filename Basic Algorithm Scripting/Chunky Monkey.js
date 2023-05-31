function chunkArrayInGroups(arr, size) {
    let initArray = [...arr]
    let c =  Math.floor(initArray.length / size)
    let array = []

    for (let i = 0; i < c; i++) {
        array.push(arr.slice(i*size, (i+1)*size))

    }
    if (initArray.length % size !== 0) array.push(arr.slice(c*size, arr.length))



    return array;
}


console.log(     chunkArrayInGroups(["a", "b", "c", "d"], 2)      )
