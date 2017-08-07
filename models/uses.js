const mongoose = require('mongoose')
var userSchema = mongoose.Schema({
    username:String,
    password:String,
    conformPassword: String,
    gender:String,
    fullname: String,
    email: String
    // location:{
    //     street: String,
    //     city: String,
    //     state: String,
    //     zip: Number    
    // }
})
exports.User = mongoose.model('User', userSchema)
//crud
module.exports={
    //add user
    addUser: (req, res)=>{
        const fullname = req.body.fullname;
        const email = req.body.email;
        const username = req.body.username;
        const pass = req.body.password;
        const repass = req.body.conformPassword;
        const gender = req.body.gender;

        var dbUser = new User();
        dbUser.username = username;
        dbUser.fullname = fullname;
        dbUser.email = email;
        dbUser.pass = password;
        dbUser.conformPassword = repass;
        dbUser.gender = gender;
        dbUser.save((err)=>{
            if(err){
                throw err;
            }else{
                console.log(dbUser);
            }
        });
    },
}