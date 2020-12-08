const mongoose=require('mongoose')
const postSchema = new mongoose.Schema({

id:{
    type:String,
    required:true
},

name:{
    type:Number,
    required:true
},
author:{
    type:String,
    required:true
},
content:{
    type:String,
    required:true
},
date:{
    type:Date,
    Default:Date()
},
upVotes:0,
downVotes:0})


module.exports=mongoose.model('Post',postSchema)






