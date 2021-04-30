const models = require('../models')
const brandContent = require('../models/brandcontent')
const comment = require('../models/comment')

const brandController = {}

brandController.getAllBrands = async (req, res) => {
    try {
        const brand = await models.brand.findAll({
            include:models.brandContent
        })
        
        // find all brands and contents of each brand too
        // const brandContent = await brand.getBrandContents()
        // Can I use this too?
        
           res.json({brand})
    } catch (error) {
        res.json({error: error.message})
    }
}


brandController.getBrandContents = async (req, res) => {
    try {
        const brand = await models.brand.findOne({
            where:{
                id: req.params.id
            }
        })

        let brandContent = await brand.getBrandContents()
        
        res.json({brand, brandContent})
    } catch (error) {
        res.json({error: error.message})
    }
}


module.exports =brandController