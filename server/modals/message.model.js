import mongoose,  { model, Schema,Types } from "mongoose";


const message = new Schema({

    sender: {
        type: Types.ObjectId,
        ref: "User",
        required: 'true'

    },
    chat: {
        type: Types.ObjectId,
        ref: "Chat",
        required: 'true'
    },
    content: String,

    attachments: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],

}, {

    timeseries: true
})

export const Message = mongoose.models.Message ||  model("Message", message)