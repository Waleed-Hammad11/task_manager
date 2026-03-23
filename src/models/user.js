import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:   true,
        trim:     true,
        lowercase:true
    },
    password: {
        type:     String,
        required: [true, "password is required"],
        minLength: [8, "password must be at least 8 characters"]
    },
},{ timestamps:true })

userSchema.pre("save",async function () {
    if(!this.isModified("password")) return 
    this.password = await bcrypt.hash(this.password,10)
})

export default mongoose.model("User", userSchema)