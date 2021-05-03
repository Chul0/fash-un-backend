const brandRoutes = require('express').Router()
const brandController = require('../controllers/brandController')


brandRoutes.get('/', brandController.getAllBrands)
brandRoutes.get('/:id', brandController.getBrandContents)
brandRoutes.post('/:id/comments', brandController.createComments)



module.exports = brandRoutes