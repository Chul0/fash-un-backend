const models = require('../models')
const brandContent = require('../models/brandcontent')
const comment = require('../models/comment')
const user = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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
        let comments = await brand.getComments({order:[['id', 'DESC']],include:models.user})
        
        res.json({brand, brandContent, comments})
    } catch (error) {
        res.json({error: error.message})
    }
}


brandController.createComments = async (req, res) => {
    try {
        const brand = await models.brand.findOne({
            where:{
                id: req.params.id
            }
        })
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    
        const user = await models.user.findOne({
      where: {
        
        id: decryptedId.userId
      }
    })

        const comment = await models.comment.create({
            description: req.body.description
        })

        await brand.addComment(comment)
        await user.addComment(comment)
        await comment.reload()
        res.json({brand, user, comment})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports =brandController