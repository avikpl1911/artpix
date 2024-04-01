import mongoose from "mongoose";

const artSchema  = new mongoose.Schema({
    assetId: String,
    name:String,
    file: String,
    Owner: String,
    OriginalOwner: String,
    tags: [String]
})

export const art = mongoose.model("art",artSchema)