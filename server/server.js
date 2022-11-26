const dotenv=require("dotenv").config();
const cors=require('cors');
const mongoose=require("mongoose");
const Task=require("./models/taskModel")
const express=require("express");
const connectDB=require("./config/connetDB");
const taskRoutes=require("./routes/taskRoute");
const app=express();

// =======middle ware===========
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
app.use(cors())
app.use( "/api/tasks",taskRoutes);







const PORT = process.env.PORT || 8000
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server is fired up on port ${PORT}`)
        });
    })
    .catch((err)=>{
        console.log(err)
    })
















    





