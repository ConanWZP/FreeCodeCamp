function uniteUnique(arr) {
   let a = [...arguments]
    let b = []
    let array = []
    for (let i = 0; i < a.length; i++) {

        b.push(...a[i])

    }
    for (let i = 0; i < b.length; i++) {
        if (array.includes(b[i])) {

        } else {
            array.push(b[i])
        }

    }
   // console.log(b)
    return array


   // return arr;
}


console.log(    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])       )
