const mongoose =require('mongoose')

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    }


})
userSchema.set("toJSON",{
    transform:(doc,user)=>{
        user.id=user._id.toString()
        delete user._id
        delete user._v
        delete user.password
    }
})

const User=mongoose.model('User',userSchema)



module.exports=User