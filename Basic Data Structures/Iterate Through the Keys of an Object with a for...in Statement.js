const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {
    // Only change code below this line
    let c = 0
    for (const user in allUsers) {
        if (allUsers[user].online) {
            c += 1
        }

    }
    return c
    // Only change code above this line
}

console.log(countOnline(users));