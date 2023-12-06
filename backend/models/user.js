import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
        name:String,
        email:{
            type:String,
            unique:true
        },
        password:String
});

const UserModel=mongoose.model('UserModel',userSchema);

export default UserModel;