const mongoose = require('mongoose');

function connectedDB(){
    mongoose.connect("mongodb://localhost:27017/project")
    .then(()=>{
        console.log("DB is connected")
    }).catch(()=>{
        console.log("DB not connected")
    })
}

module.exports = connectedDB;