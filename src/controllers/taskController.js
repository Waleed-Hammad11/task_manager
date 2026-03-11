import Task from "../models/task.js"

export const createTask=async(req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json({
            success: true,
            data: task
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error.message
        })
    }
}

export const getAllTasks = async(req,res)=>{
    try {
        const tasks = await Task.find()
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            data: error.message
        })
    }
}

export const updateTask = async(req,res)=>{
    try {
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
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error.message
        })
    }
}

export const deleteTask = async(req ,res)=>{
    try {
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
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error.message
        })
    }
}