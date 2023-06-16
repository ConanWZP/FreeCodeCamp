function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let arr = str.split('')

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {

        } else {
            counter++
        }
    }

    if (counter === arr.length) {
        return `${str}ay`
    }


    for (let i = 0; i < arr.length;) {
        console.log(arr[i])
        if (  vowels.includes(arr[i]) ) {

            arr.push('way')
            return arr.join('')

        } else {

            let firstEl = arr.shift()

            arr.push(firstEl)




            if ( vowels.includes(arr[i])  ) {
                arr.push('ay')

                return arr.join('')

            } else {

            }
        }
    }


}

console.log(   translatePigLatin("rhythm")     )
