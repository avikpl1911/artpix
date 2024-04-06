import mongoose from "mongoose";

const listedassetschema = new mongoose.Schema({
  assetid: {
    type: String,
    required: true,
    unique: true 
  },
  timestamp: {
    type: Number,
    required: true,
    unique: true 
  }

})


export const listedAsset = mongoose.model("listedasset",listedassetschema)