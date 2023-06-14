
function destroyer(arr) {
    let array = arguments[0]
    let value = []
    for (let i = 1; i < arguments.length; i++) {
        value.push(arguments[i])
    }

    for (let i = 0; i < value.length; i++) {
       array = array.filter((e) => e !== value[i])
    }


    return array

}


console.log(    destroyer([1, 2, 3, 1, 2, 3], 2, 3)      )
