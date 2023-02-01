const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    usersControllers.findAllUsers()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            res.status(400).json(error)
        })
}

const getFindUserById = (req, res) => {
    const id = Number(req.params.id)
    usersControllers.findUserId(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({
                    message: 'Invalid ID'
                })
            }
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const postCreateUser = (req, res) => {
    const userObj = req.body
    usersControllers.createUser(userObj)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({ err })
        })
}

module.exports = {
    getAllUsers,
    getFindUserById,
    postCreateUser,
}