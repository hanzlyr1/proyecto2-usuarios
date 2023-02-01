
const usersServices = require('./users.services')

const router = require('express').Router()


router.get('/users', usersServices.getAllUsers)
router.post('/users', usersServices.postCreateUser)

router.get('/users/:id', usersServices.getFindUserById)

module.exports = router