function pairElement(str) {
    let array = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            array.push(['A', 'T'])
        } else if (str[i] === 'T') {
            array.push(['T', 'A'])
        } else if (str[i] === 'C') {
            array.push(['C', 'G'])
        } else {
            array.push(['G', 'C'])
        }

    }


    return array;
}


console.log(     pairElement("GCG")      )
