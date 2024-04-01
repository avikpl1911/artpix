import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    profileImg: String,
    id: String,
    username: String,
    password: String,
    userAssets: [String]
}) 

export const user = mongoose.model("user",userSchema)