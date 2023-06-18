function fearNotLetter(str) {

    let obj = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26

}

let array = []

    for (let ob in obj) {
        let item = {}
        item[ob] = obj[ob]
        array.push(item)
    }


    for (let i = 0; i < str.length; i++) {
        if ( obj[str[i+1]] - obj[str[i]] > 1 ) {
            let a = obj[str[i+1]]-1

            let b = array.filter((e) => Object.values(e)[0] === a)
           // console.log(b)
            return Object.keys(...b)[0]
            /// console.log(    ...Object.values(e)    )
           // console.log(Object.keys(e))
           // console.log(b)



           // console.log(b)
        }
    }






}

console.log(     fearNotLetter("abcdefghjklmno")        )

