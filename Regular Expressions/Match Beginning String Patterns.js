let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log( result ) // true

let rickyAndCalMOD = "And Ricky Cal both like racing.";
let calRegexMOD = /^Cal/; // Change this line
let resultMOD = calRegexMOD.test(rickyAndCalMOD);


console.log(  resultMOD ) // false