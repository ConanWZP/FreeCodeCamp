let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


//  . это наличие одной буквы т.е. она может быть до или после какого-то сочетания букв

console.log(result) // true