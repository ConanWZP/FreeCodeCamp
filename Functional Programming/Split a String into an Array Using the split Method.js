function splitify(str) {
    // Only change code below this line
    let regex = /\W/gi
    let a = str.replace(regex, ' ')
    console.log( a  )
    return a.split(' ')

    // Only change code above this line
}

console.log(     splitify("This.is.a-sentence")      )
