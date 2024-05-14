const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    FirstName:{
        type: String,
        require: [true, "Please enter a name"]
    },
    LastName:{
        type: String,
        require: [true, "Please enter a name"]
    },
    email:{
        type: String,
        require: [true, "Please nete an email"],
        unique: [true, "Email already exist"]
    },
    password:{
        type: String,
        minlength: [6, "Password must be of 6 characters"]
    },
    expenses:[
        {
            type: String,
        }
    ] 
})

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next()
})

userSchema.methods.matchPassword = async function(password){
    // console.log(this.password+"   "+ password)
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model("User", userSchema);
