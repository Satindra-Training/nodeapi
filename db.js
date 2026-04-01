const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./students.db",(error)=>{
      if(error) throw error;
      else{
          console.log("sucsseffully connected to sqlite3");
      }
});
module.exports = db;
