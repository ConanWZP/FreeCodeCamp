// Only change code below this line
function urlSlug(title) {

    let a = title.split(' ')
    let b = a.filter((e) => e.length > 0)
    let c = b.map((e) => e[0].toLowerCase() + e.slice(1))
    let d = c.join('-')
    return d


}
// Only change code above this line


console.log(     urlSlug(" Winter Is  Coming")           )
