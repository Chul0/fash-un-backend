const brandRoutes = require('express').Router()
const brandController = require('../controllers/brandController')


brandRoutes.get('/', brandController.getAllBrands)



module.exports = brandRoutes