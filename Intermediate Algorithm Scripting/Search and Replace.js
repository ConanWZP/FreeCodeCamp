function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
        let a = after[0].toUpperCase() + after.slice(1)

        return str.replace(before, a)
    } else {
        let a = after[0].toLowerCase() + after.slice(1)
        return str.replace(before, a)
    }


}


console.log(    myReplace("He is Sleeping on the couch", "Sleeping", "sitting")       )
