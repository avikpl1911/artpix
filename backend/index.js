import express from "express";
import {initdb} from "./src/initdb.js";
import { user } from "./db/user.js";
import { art } from "./db/art.js";
import multer from "multer";
import cors from "cors"
import fs from "fs"
const app = express();

import bodyParser from "body-parser"


app.use(bodyParser.json());
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


app.post("/signup",(req,res)=>{
   console.log()
   const decodedData = Buffer.from(req.body.data.img.split(',')[1], 'base64');
   const filename = Date.now() + '.jpg';

   fs.writeFile('images/profile/' + filename, decodedData, (err) => {
    if (err) {
        console.error('Error saving file:', err);
        return res.status(500).send('Error uploading file');
    }

    const newUser = new user({
      profileImg: filename,
      username: req.body.data.username,
      password: req.body.data.password,
      userAssets: []

    })

    newUser.save()


    res.send('File uploaded successfully!');
   });
  
});


app.get("/profile/:id",(req,res)=>{
 console.log(req.params.id)
 res.sendFile(process.cwd()+"/images/profile/"+req.params.id)


})


app.listen(2000,()=>{
    console.log("server is running")
});

