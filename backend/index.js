import express from "express";
import {initdb} from "./src/initdb.js";
import { user } from "./db/user.js";
import { art } from "./db/art.js";
const app = express();


initdb();




app.listen(2000,()=>{
    console.log("server is running")
});

