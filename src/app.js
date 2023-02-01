const express = require('express')
const usersRouter = require('./users/users.router')
const app = express()


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Ok'
    })
})

app.use('/', usersRouter)

app.listen(9000, () => {
    console.log('server started at: http://localhost:9000')
})


module.exports = app
