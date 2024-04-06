import mongoose from "mongoose";

const artSchema  = new mongoose.Schema({
    assetId: {
        type: String,
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true,
       
    },
    listed: Boolean,
    file: String,
    Owner: String,
    OriginalOwner: String,
    tags: [String]
})

export const asset = mongoose.model("asset",artSchema)