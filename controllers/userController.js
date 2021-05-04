const models = require('../models')
const { save } = require('./brandContentController')

const  userController ={}

//signup
userController.create = async (req, res) => {
    try {
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({user, message: 'User created!'})
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
}

//login

userController.login = async(req, res) => {
    try {
      const user = await models.user.findOne({
        where: { 
            email: req.body.email 
        }
      })
  
      if (user.password === req.body.password) {
        res.json({ user, message: 'login successful' })
      } else {
        res.status(401).json({ message: 'login failed' })
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message })    
    }
  }

//Fetch user id to userContext
userController.verify = async (req, res) => {
  try {
    const user = await models.user.findOne({
      where: {id: req.headers.authorization }
    })

    if (user) {
      res.json({user, message:'user found'})
    }else {
      res.status(404).json({message: 'user not found'})
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({error: error.message})
  }
}

//Find saved brand content images 
userController.getMyBoard = async (req, res) => {
  try {
    const user = await models.user.findOne({
      where: {id: req.headers.authorization}
    })

    // console.log(user);
    const savedImage = await user.getBrandContents()

    res.json(savedImage)
  } catch (error) {
    res.json(error)
  }
}

//user profile update
userController.update = async (req, res) => {
  try {
    const updates = req.body

    const user = await models.user.findOne({
      where: {id: req.headers.authorization}
    })

    const finalStep = await user.update(updates)
    res.json({finalStep})
  } catch (error) {
    res.json({error: error.message})
  }
}

//delete user and user's comments
userController.delete = async (req, res) => {
  try {
    const user = await models.user.findOne({
      where: { id: req.headers.authorization },
      // include:models.comment
    })
    const comments = await user.getComments()

    //loop through each of this user's comment, destroy them one by one.
    for(let i=0 ; i < comments.length; i++){
      await comments[i].destroy()
    }

    // const deleteComments = await user.removeComments(comments)
    // removeChildren just disassociates the children by giving them a null parentId, which is not what I want in this case.

    await user.destroy()
    res.json({user, comments})
  } catch (error) {
    res.json({error: error.message})
  }
}


module.exports = userController