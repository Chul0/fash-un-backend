const models = require('../models')
const brandContent = require('../models/brandcontent')
const comment = require('../models/comment')

const brandController = {}

brandController.getAllBrands = async (req, res) => {
    try {
        let brand = await models.brand.findAll({include:models.brandContent})
        

        
           res.json({brand})
    } catch (error) {
        res.json({error})
    }
}



module.exports =brandController