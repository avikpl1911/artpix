import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    profileImg: String,
    email: {
        type: String,
        required: true,
        unique: true 
      },
    username: String,
    password: String,
    userAssets: [String],
    listedAssets: {
      type: [String],
      default: []
    }
}) 

export const user = mongoose.model("user",userSchema)