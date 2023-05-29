function repeatStringNumTimes(str, num) {
    if (num <=0) {
        return ''
    }
    let c = str
    for (let i = 0; i < num-1; i++) {
        c += str
    }
    return c;
}

console.log(   repeatStringNumTimes("abc", 3)    )
