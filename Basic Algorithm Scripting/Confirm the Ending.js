function confirmEnding(str, target) {
    /*return str.indexOf(target)*/
    return str.lastIndexOf(target) === (str.length - target.length)
}

console.log(     confirmEnding("He has to give me a new name", "name")         )
