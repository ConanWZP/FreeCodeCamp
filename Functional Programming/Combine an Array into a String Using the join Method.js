function sentensify(str) {
    // Only change code below this line
    let regex = /\W/gi
    let a = str.split(regex)
    return a.join(' ')

    // Only change code above this line
}

console.log(    sentensify("May-the-force-be-with-you")       )
