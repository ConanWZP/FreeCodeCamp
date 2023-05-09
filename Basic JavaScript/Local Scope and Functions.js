function myLocalScope() {
    // Only change code below this line
    const myVar = 2
    console.log('inside myLocalScope', myVar); // inside myLocalScope 2

}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar); //  ReferenceError: myVar is not defined