
import mongoose,  { model, Schema ,Types} from "mongoose";


const chat = new Schema({
  
    name: {
        type:String,
        required:true
    },             
    isGroup: {
        type:Boolean,
        default:false
    },               
    creator: {
        type: Types.ObjectId,
        ref:"User"
        
    },         
    
    members: [{
        type: Types.ObjectId,
        ref:"User"
    }]
      
     
     
  },{

    timeseries:true
  })

export const Chat = mongoose.models.Chat || model("Chat",chat)