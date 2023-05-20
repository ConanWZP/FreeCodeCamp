let sampleWord = "astro234naut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

// БОЛЬШЕ 6 СИМВОЛОВ И ДВЕ ЦИФРЫ МИНИМУМ ПОСЛЕДОВАТЕЛЬНО ИДУТ

console.log( result )