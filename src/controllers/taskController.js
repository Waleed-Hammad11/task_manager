import Task from "../models/task"

export const createTask=async(req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json({
            success: true,
            data: task
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            data: error.message
        })
    }
    

}