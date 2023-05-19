let text = "<h1>Winter is coming</h1>";
let myRegex = /<.1*?>/; // Change this line
let result = text.match(myRegex);

console.log( result )

/*


[
    '<h1>',
        index: 0,
    input: '<h1>Winter is coming</h1>',
    groups: undefined
]


*/
