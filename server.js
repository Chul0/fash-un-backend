require('dotenv').config()

const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)

app.use(express.json())
app.use(require('cors')())


////////////////////////////////////////////
const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

const brandRoutes = require('./routes/brandRoutes')
app.use('/brands', brandRoutes)

const brandContentRoutes = require('./routes//brandContentRoutes')
app.use('/brandcontent', brandContentRoutes)



////////////////////////////////////////////

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`backend server running on ${PORT}!`);
  routesReport.print()
})