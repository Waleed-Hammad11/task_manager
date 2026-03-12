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
    const queryObject = { ...req.query }
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObject[el]);
    let mongooseQuery = Task.find(queryObject);

    if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    mongooseQuery = mongooseQuery.sort(sortBy);
    
    } else {
    mongooseQuery = mongooseQuery.sort('-createdAt'); 
    }


    const page = req.query.page * 1 || 1; 
    const limit = req.query.limit * 1 || 10; 
    const skip = (page - 1) * limit;
    mongooseQuery = mongooseQuery.skip(skip).limit(limit);

    const tasks = await mongooseQuery;

    res.status(200).json({
        success: true,
        results: tasks.length,
        page,
        data: tasks
    });
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