import mongoose,  { model, Schema,Types } from "mongoose";

const request = new Schema(
  {
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "accepted", "rejected"],
    },
    sender: {
      type: Types.ObjectId,
      ref: "User",
      required: "true",
    },
    reciever: {
        type: Types.ObjectId,
        ref: "User",
        required: "true",
      },



  },
  {
    timeseries: true,
  }
);

export const Request = mongoose.models.Request || model("Request", request);
