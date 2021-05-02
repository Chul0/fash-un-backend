const models = require('../models')
const brandContent = require('../models/brandcontent')
const user = require('../models/user')
const save = require('../models/save')


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

//Save images to user's my board
brandContentController.save = async (req, res) => {
    try {
        const brandContent = await models.brandContent.findOne({
            where:{
                id:req.params.id
            }
        })
        
        let user = await models.user.findOne({
            where: {id: req.headers.authorization }
        })
        // console.log(user);

        let addAssociation = await user.addBrandContent(brandContent)
        res.json({brandContent, user, addAssociation})
    } catch (error) {
        res.json(error)
    }
}

brandContentController.delete =async (req,res) => {
    try {
        const user = await models.user.findOne({
            where :{ id: req.headers.authorization }
        })
        const deleteImage = await models.save.destroy({
            where:{
                userId: user.id,
                brandContentId: req.params.id               
            }
        })
        console.log(deleteImage);
        res.json({user, deleteImage})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports =brandContentController