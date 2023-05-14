// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
   /* for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop]
            } else {
                return `No such property`
            }

        } else {
            return `No such contact`
        }

    }*/


    let a = contacts.filter((cont) => cont.firstName === name)

    if (a.length === 0) {
        return 'No such contact'
    } else {
        if (a[0].hasOwnProperty(prop)) {
            return a[0][prop]
        } else {
            return 'No such property'
        }
    }




    // Only change code above this line
}


console.log(  lookUpProfile("Kristian", "lastName")  )
