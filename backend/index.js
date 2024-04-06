import express, { response } from "express";
import {initdb} from "./src/initdb.js";
import { user } from "./db/user.js";
import { asset } from "./db/art.js";
import { listedAsset } from "./db/listedassets.js";
import multer from "multer";
import cors from "cors"
import fs from "fs"
import crypto from "crypto"


const app = express();

import bodyParser from "body-parser"
import { Console } from "console";
import mongoose from "mongoose";



app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
const storageEngine = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
      
      cb(null, `${Date.now()}--${file.originalname}`);
    },
});

const upload = multer({
    storage: storageEngine,
  });
app.use(cors())

initdb();


app.post("/signup", async (req,res)=>{

   const decodedData = Buffer.from(req.body.data.img.split(',')[1], 'base64');
   const filename = Date.now() + '.jpg';
   
   fs.writeFile('images/profile/' + filename, decodedData, async (err) => {
    if (err) {
        console.error('Error saving file:', err);
        return res.status(500).json({error:"server error",status:1});
    }
    
    const existingUser = await user.findOne({email:req.body.data.email});
   if(existingUser){
    res.json({status:1,error:"user with email already exsists"})
   }else{
    const newUser = new user({
      profileImg: filename,
      email: req.body.data.email,
      username: req.body.data.username,
      password: req.body.data.password,
      userAssets: []

    })
    try {
      const savedUser = await newUser.save()
      res.json({status:0,savedUser});
    } catch (error) {
       res.json({status:1,error:"server error"})
    }
   }  
   });
  
});

app.post("/login",async (req,res)=>{
  console.log(req.body.email)
  const finduser = await user.findOne({email:req.body.email,password:req.body.password})
  console.log(finduser)
  if(finduser){
    res.json({status:0,finduser})
  }else{
    res.json({status:1,error:"you are not registered"})
  }
})


app.get("/profile/:id",(req,res)=>{

 res.sendFile(process.cwd()+"/images/profile/"+req.params.id)
 

})


app.get("/publicuser/:id", async (req,res)=>{
  const usr = await user.findById(req.params.id);
  res.json({listedAssets: usr.listedAssets,
          profileImg: usr.profileImg,
          username: usr.username
          })
})


// asset controllers


app.post("/upload_asset",async (req,res)=>{
  
  const hash = crypto.createHash('sha256');
  hash.update(Buffer.from(req.body.file, 'base64')); 
  const fileHash = hash.digest('hex'); 
 

  const checkhash = await asset.findOne({assetId: fileHash})
  
  if(checkhash){
    return res.status(500).json({error:"this art already exsists on this platform",status:1});
  }else{
    const decodedData = Buffer.from(req.body.file.split(',')[1], 'base64');
    const filename = Date.now() + '.jpg';
    
    fs.writeFile('images/asset/' + filename, decodedData, async (err) => {
      if (err) {
          console.error('Error saving file:', err);
          return res.status(500).json({error:"server error",status:1});
      }
    })
  
  
  
    const newAsset  = new asset({
      assetId: fileHash,
      name: req.body.name,
      file: filename,
      Owner: req.body.userId,
      OriginalOwner: req.body.userId,
      listed: false,
      tags:[]
  
    })
  
    const savedAsset = await newAsset.save()
    
    const sosdas = await user.findByIdAndUpdate(req.body.userId,{$push:{userAssets: savedAsset._id}})
    
    res.json({status: 0,savedAsset})
  }

  

})


app.post("/userasset",async (req,res)=>{
   
   const userfind = await user.findById(req.body.id) 

  //  const objectIds = userfind.userAssets.map(id => mongoose.Types.ObjectId(id))

   const documents = await asset.find({ _id: { $in: userfind.userAssets } });
   res.json({documents})
})

app.post("/mutiasset",async (req,res)=>{
  console.log(req.body.arr)
  const documents = await asset.find({ _id: { $in: req.body.arr } });
  res.json({documents})
})


app.get("/asset/:id",(req,res)=>{
  
  res.sendFile(process.cwd()+"/images/asset/"+req.params.id)
  
 
 })

app.post("/list",async (req,res)=>{

  console.log(req.body.id)
  const islisted = await listedAsset.findOne({assetid:req.body.id})
  const astlst = await asset.findById(req.body.id)

  if(islisted!=null && astlst.listed==true ){
      const ast = await asset.findByIdAndUpdate(req.body.id,{$set:{listed:false}})
      const del = await listedAsset.findByIdAndDelete(islisted._id)
      res.json({stat:"unlisted"})
  }else{

    const updatedAsset =  await asset.findByIdAndUpdate(req.body.id,{$set:{listed:true}})
    const listedasset = new listedAsset({assetid:req.body.id,timestamp: Date.now()})
    listedasset.save()
    res.json({stat:"listed"})

  }
  
})

app.get("/home",async (req,res)=>{
 const myArray = await listedAsset.find()
 let randomUniqueObjects = myArray.length <= 20 ? myArray.slice() : myArray.sort(() => Math.random() - 0.5).slice(0, 20);
 res.json({randomUniqueObjects})
 
})

app.post("/buy",async (req,res)=>{
  
  
 const usr = await user.findByIdAndUpdate(req.body.ownerid,{$pull:{userAssets: req.body.assetid}})
 const addusr = await user.findByIdAndUpdate(req.body.userid,{$push:{userAssets: req.body.assetid}})
 const modasset = await asset.findByIdAndUpdate(req.body.assetid,{Owner:req.body.userid,listed:false})
const dellisted = await listedAsset.findOneAndDelete({assetid:req.body.assetid})
 
res.status(200)

})

app.get("/find/:find",async (req,res)=>{
const docs = await asset.find({ name: { $regex: req.params.find },listed:true })

res.json(docs)


})



app.listen(2000,()=>{
    console.log("server is running")
});

