let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

// g - искать не только первое совпадение, i - игнорирование регистра

console.log( result  ) // [ 'Twinkle', 'twinkle' ]
