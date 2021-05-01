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


brandContentController.save = async (req, res) => {
    try {
        const brandContent = await models.brandContent.findOne({
            where:{
                id:req.params.id
            }
        })

        const user = await models.user.findOne({
            where: {id: req.headers.authorization }
        })

        let addAssociation = await user.addBrandContent(brandContent)
        res.json({brandContent, user, addAssociation})
    } catch (error) {
        res.json(error)
    }
}


module.exports =brandContentController