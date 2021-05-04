const userRoutes = require('express').Router()
const userController = require('../controllers/userController')


userRoutes.post('/', userController.create)
userRoutes.post('/login', userController.login)
userRoutes.get('/verify', userController.verifyUser)
userRoutes.get('/myboard', userController.getMyBoard)
userRoutes.put('/profile', userController.update)
userRoutes.delete('/', userController.delete)

module.exports = userRoutes