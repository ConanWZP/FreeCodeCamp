function frankenSplice(arr1, arr2, n) {
    let a = [...arr2]
    a.splice(n, 0, ...arr1)
    console.log(arr2)
    return a
}

console.log(    frankenSplice([1, 2, 3], [4, 5, 6], 1)       )
