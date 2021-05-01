const userRoutes = require('express').Router()
const userController = require('../controllers/userController')


userRoutes.post('/', userController.create)
userRoutes.post('/login', userController.login)
userRoutes.get('/verify', userController.verify)
userRoutes.get('/myboard', userController.getMyBoard)


module.exports = userRoutes