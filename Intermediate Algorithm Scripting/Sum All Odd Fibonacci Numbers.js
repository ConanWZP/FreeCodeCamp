function sumFibs(num) {
    let array = [0, 1]

    for (let i = 1; i <= num; i++) {
        array.push(array[i] + array[i-1])
    }

    let b = array.filter((e) => e%2 !== 0 && e <= num)

    return b.reduce((prev, current) => prev + current, 0)


}


console.log(     sumFibs(4000000)       )
