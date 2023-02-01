
const usersDB = [

]

let baseId = 2


const findAllUsers = async () => {
    return await usersDB
}

const findUserId = async (id) => {
    const findUser = await usersDB.find(user => user.id === id)
    return findUser
}


const createUser = async (userObj) => {
    const newUser = {
        id: baseId++,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        age: userObj.age
    }
    await usersDB.push(newUser)

    return newUser
}

module.exports = {
    findAllUsers,
    findUserId,
    createUser,
}