import express from 'express'
import cors from 'cors'
import bootstrap  from './src/bootstrap.js';
import userModel from './database/models/users.model.js';
import postModel from './database/models/post.model.js'
const app=express();
app.use(cors());
const port=3000;
// app.get("/",async(req,res)=>{
//     const users=await userModel.findAll()
//     res.send({message:"done"});
// })
app.get("/",async(req,res)=>{
    const post=await postModel.findAll()
    res.send({message:"done"});
})
bootstrap(app,express);
app.listen(port,(error)=>{
if(error) console.log(error)
    else console.log("server running");
});

