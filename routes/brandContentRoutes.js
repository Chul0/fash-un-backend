const brandContentRoutes = require('express').Router()
const brandContentController = require('../controllers/brandContentController')


brandContentRoutes.get('/:id', brandContentController.getBrandContent)
brandContentRoutes.post('/:id', brandContentController.save)
brandContentRoutes.delete('/:id', brandContentController.delete)




module.exports = brandContentRoutes