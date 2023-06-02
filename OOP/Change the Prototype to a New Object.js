function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 2,
    eat: function() {
        cosole.log('eat eat')
    },
    describe: function() {
        console.log(`Dogi Dogi`)
    }
};