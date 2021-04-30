const brandRoutes = require('express').Router()
const brandController = require('../controllers/brandController')


brandRoutes.get('/', brandController.getAllBrands)
brandRoutes.get('/:id', brandController.getBrandContents)



module.exports = brandRoutes