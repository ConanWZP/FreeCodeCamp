function factorialize(num) {
    let s = 1
    for (let i = 1; i <= num; i++) {
        s *= i
    }

    return s;
}

console.log( factorialize(5)  )
