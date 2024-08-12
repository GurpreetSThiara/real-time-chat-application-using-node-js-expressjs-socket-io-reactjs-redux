import mongoose,  { model, Schema } from "mongoose";



const user = new Schema({
  
    name: {
        type:String,
        required:true
    },             
    username: {
        type:String,
        required:true,
        unique:true
    },               
    email: {
        type: String,
        required: true,
        unique: true,
     
    },                
    password: {
        type:String,
        required:true,
        select:false
    },         
    avatar: {
        public_id : {
            type: String,
             required:true  
        } ,
        url:{
         type: String,
         required: true  
        }   
    },       
     
  },{

    timeseries:true
  })

export const User =mongoose.models.User || model("User",user)