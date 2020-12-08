const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const signupRouter = require('./controllers/auth')
const routes=require("./router/auth")
const postRouter = require('./controllers/post')

const config={
    useNewUrlParser: true,
    useUnifiedTopology:true
}


mongoose.connect(process.env.MONGODB_URI, config,{ useNewUrlParser: true })
.then(()=>{
    console.log("Successfully connected")
})
.catch((err)=>{
    console.log(err)

    app.use(bodyParser.json())
    app.use('/signup',signupRouter)
})


app.use(routes)
app.use('/posts',postRouter)


app.listen(6000,()=>{
    console.log('listening on port',6000)
})
const port=process.env.PORT