function titleCase(str) {
    let array = str.split(' ')
    let a = []
    for (let i = 0; i < array.length; i++) {
        a.push(array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase())

    }

    return a.join(' ');
}


console.log(    titleCase("I'm a little tea pot")            )
