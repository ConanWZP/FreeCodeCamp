let hello = "   Hello, World!  ";
let wsRegex = /Hello, World!/; // Change this line
let result = hello.match(wsRegex)[0]; // Change this line

console.log(result)

// ИЛИ


let test = "   Hello, World!  ";
let wsRegexTest = /\s\s+/g; // Change this line
let resultTest = test.replace(wsRegexTest, ''); // Change this line

console.log(resultTest)