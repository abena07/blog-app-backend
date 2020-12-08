const postRouter =require('express').Router()
const { isValidObjectId } = require('mongoose')
const post = require('../models/post')
const Post =require('../models/post')


//get all posts to be routed
postRouter.get('/',(req,res,next)=>{
    Post.find({}).then(res=>{
        res.status(200).send(res)
        next()
    })
})


//create a new post to be routed
postRouter.post('/',async(req,res,next)=>{
    const{name,author,content,date,upVotes,downVotes}=request.body

    if(name&&author&&content&&date&&upVotes&&downVotes){
    const postCount=await Post.countDocuments()
    const newPost= new Post({
        id:postCount+1,
        name:name,
        author:author,
        content:content,
        date:Date(),
        upVotes:0,
        downVotes:0
    
    })
    newPost.save()
    .then(res=>{
        res.status(201).send(res)

    })

}
    else{
        res.status(400).send({message:"Check your request body"})
    }
})

//get all posts by a specific author
postRouter.get(':/author',(req,res,next)=>{
    const author=request.params.author
    post.find({author:author}).then(res=>{
        res.status(200).send(res)
        next()
        
    })
})

//Delete a post 
postRouter.delete('/:id',(req,res,next)=>{
    deleteID =req.params.id
    Post.findOneAndDelete({id:deleteID}).then((res)=>{
        res.status(200)
        next()
        .catch((err)=>{
            console.log(err)
        })
    })
})


//update a blogpost
postRouter.patch('/update/:id',async(req,res)=>{
    try{
        const _id=new ObjectId(req.params.id)
        await post.update({_id: _id},{$set:{
            content:req.body.content,
            upVotes:req.body.upVotes,
            downVotes:req.body.downVotes
        }})
        post.save()
        res.send(post)
    }
        catch{
            res.status(404)
            res.send({error:"Post is not in existence"})
        }
    
})

























module.exports= postRouter
