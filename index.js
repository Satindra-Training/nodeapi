//loading the express lib
const express = require('express');
//loading the cors lib
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;
const host ='localhost';
const db = require('./db');
const users = [
    {id:1,name:"Russel",age:33},
    {id:2,name:"John",age:32}
];

app.use(express.json());
app.use(express.urlencoded({extended:true})); //Incoming POST Method enabled.

//api endpoints.
app.get("/api/users",(req,res)=>{
      res.status(200).json(users);
});
//adding new users
app.post("/api/users/signup",(req,res)=>{
    var SQL=`insert into students(name,email)values('${req.body.name}','${req.body.email}')`;
    db.run(SQL,function(error){
        if(error) res.status(403).json(error);
        else{
              //res.status(200).json(this.lastID);
              if(!this.lastID){
                res.status(200).json({"message":"error"});
              }else{
                res.status(200).json({"message":"success"});
              }
        }
    })  
   // res.status(200).json({data:req.body,message:"signup Done"});
});

module.exports = app;
