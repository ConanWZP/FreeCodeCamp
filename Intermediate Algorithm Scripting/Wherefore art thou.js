function whatIsInAName(collection, source) {

    let a = Object.keys(source)

    //console.log(a)
    let array = []
    let c = []

    for (let i = 0; i < a.length; i++) {

      /* let b = collection.filter((e) => e.hasOwnProperty(a[i]) && e[a[i]] === source[a[i]])*/
       collection.filter(e =>  console.log(   e[a[i]] === source[a[i]] ) )
        let b = collection.filter((e) => e.hasOwnProperty(a[i]) && e[a[i]] === source[a[i]])
        if (b.length === 0) {

            return  []
        }
        console.log(  b, '[]'  )

       array.push(...b)
    }

    console.log('----------------------')
    if (a.length > 1) {
        for (let i = 0; i < array.length; i++) {
            if ( array.includes(array[i], i+1) ) {
                c.push(array[i])
            }
        }
        return c
    } else {
        return array
    }



  //  let array = collection.filter((e) =>  e.hasOwnProperty(a[0]) && e[a[0]] === source[a[0]]  )


  //  return array

}

console.log(  whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})   )
