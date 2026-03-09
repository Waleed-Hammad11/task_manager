import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import taskRoutes from "./routes/taskRoutes,js"
const app = express()

dotenv.config()

app.use(express.json())

app.use('/api/v1/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("the server has been connected successfully"))
.catch(()=>console.log("the server crashed"))

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}`)
})