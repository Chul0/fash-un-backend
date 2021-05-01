const models = require('../models')
const brandContent = require('../models/brandcontent')


const brandContentController = {}


brandContentController.getBrandContent = async (req, res) => {
    try {
        const brandContent = await models.brandContent.findOne({
            where:{
                id: req.params.id
            }
        })
    
        res.json({brandContent})
    } catch (error) {
        res.json({error: error.message})
    }
}




module.exports =brandContentController