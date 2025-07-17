const express = require("express");
const app = express();
const PORT = 5050;
require('dotenv').config();
const connectedDB = require('./DB/connectDB');
const cors = require('cors');
const morgan = require('morgan')
const routes = require('./routes/index');

//db
connectedDB();

//middleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//routes
app.use("/",routes);

app.get('/',(req,res)=>{
      res.send("API is running!");
})
app.listen(PORT,()=>{
console.log(`Server is connected to port ${PORT} http://localhost:${PORT}`);
})

