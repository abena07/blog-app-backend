const User = require('../models/user')
const bcrypt=require('bcrypt')



const authCtrl = {}


authCtrl.signup = "something"


authCtrl.signup = async(request,response)=>{
    const{firstName, lastName, email, password} = request.body
    const user = new User({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })

    try{
        user.password=bcrypt.hashSync(user.password,10)
        const newUser = await user.save()
        response.send({mesage:"User created!" ,newUser})
    }catch(err){
        console.log(err)
        res.status(500).send({status: "Internal Server Error"})
    }
}

//Login
// authCtrl.login = async(req,res,next) => {

//     const username = req.body.username
//     const password = req.body.password


//     if( username && password) {
//         const owner = await User.findOne({username:useranme})
//         if(bcrypt.compareSync(passowrd, user.passwordHash)){
//             res.status(200).send("you are logged in")}
//             else{
//                 res.status(401).send("incorrect password")
//     }
//             }else{
//                 res.status(400).send("Invalid username or password")
//             }
//     })




module.exports = authCtrl