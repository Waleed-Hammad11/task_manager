import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import taskRoutes from "./routes/taskRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import globalError from "./middlewares/errorMiddleware.js";
import { setupSwagger } from "./config/swagger.js";

const app = express()

dotenv.config()

app.use(express.json())

setupSwagger(app);

app.use('/api/v1/tasks', taskRoutes);
app.use("/api/v1/auth",  authRoutes);

app.use((req, res, next) => {
    const err = new Error(`can't find path ${req.originalUrl}`);
    err.statusCode = 404;
    next(err); 
});

app.use(globalError);

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>console.log("the server has been connected successfully"))
// .catch((err)=>console.log(err.message))

// const PORT = process.env.PORT || 5000
// app.listen(PORT,()=>{
//     console.log(`the server is running on port ${PORT}`)
// })


const startServer = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully ");
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} `);
    });
    } catch (error) {
        console.error("MongoDB connection failed ", err.message);
        process.exit(1);
    }
}

startServer()