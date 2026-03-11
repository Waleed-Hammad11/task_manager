import Task from "../models/task.js"
import expressAsyncHandler from "express-async-handler"

export const createTask=expressAsyncHandler(async(req,res)=>{
    
        const task = await Task.create(req.body)
        res.status(200).json({
            success: true,
            data: task
        })
    
})

export const getAllTasks = expressAsyncHandler(async(req,res)=>{
        const tasks = await Task.find()
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        })
})

export const updateTask = (async(req,res)=>{
        const tasks = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

            if (!tasks){
                res.status(404).json({
            success: false,
            message:"there is no task in this ID"
        })
            }
                res.status(200).json({
                success: true,
                data: tasks
            })
    
})

export const deleteTask = expressAsyncHandler(async(req ,res)=>{

        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            res.status(404).json({
            success: false,
            message: `task not found`
        })
        }

        res.status(200).json({
            success: true,
            message: `task deleted successfully`
        })

})