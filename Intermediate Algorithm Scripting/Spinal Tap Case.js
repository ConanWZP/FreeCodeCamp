function spinalCase(str) {
    let s = str.split('')

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ' || s[i] === '-') s[i+1] = s[i+1].toUpperCase()
    }
    s = s.join('')

    let regex = /[_\W]/g
    let a = s.replace(regex, '').split('')
    console.log(a)

    let b = a.map((e, index) => (e === e.toUpperCase() && index > 0 ) ? `-${e.toLowerCase()}` : e.toLowerCase())

    return b.join('');
}

console.log(  spinalCase('Teletubbies say Eh-oh')     )
