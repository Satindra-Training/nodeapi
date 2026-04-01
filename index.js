//loading the express lib
const express = require('express');
//loading the cors lib
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;
const host ='localhost';

const users = [
    {id:1,name:"Russel",age:33},
    {id:2,name:"John",age:32}
];

//api endpoints.
app.get("/api/users",(req,res)=>{
      res.status(200).json(users);
});

module.exports = app;
