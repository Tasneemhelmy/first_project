import express from 'express'
import cors from 'cors'
import bootstrap  from './src/bootstrap.js';
import DBconnection from './database/connection.js';
const app=express();
app.use(cors());
const port=process.env.PORT||3000;
bootstrap(app,express);

app.listen(port,(error)=>{
if(error) console.log(error)
    else console.log("server running");
});

