import Task from "../models/task.js";
import expressAsyncHandler from "express-async-handler";
import ApiResponse from "../utils/ApiResponse.js";
import { TASK_MESSAGES } from "../constants/messages.js";
export const createTask = expressAsyncHandler(async (req, res) => {
    const task = await Task.create(req.body);
    return res.status(200).json(ApiResponse.success(TASK_MESSAGES.CREATED, task));
});

export const getAllTasks = expressAsyncHandler(async (req, res) => {
    const queryObject = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObject[el]);
    let mongooseQuery = Task.find(queryObject);

    if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        mongooseQuery = mongooseQuery.sort(sortBy);
    } else {
        mongooseQuery = mongooseQuery.sort("-createdAt");
    }

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    mongooseQuery = mongooseQuery.skip(skip).limit(limit);

    const tasks = await mongooseQuery;

    return res.status(200).json(
        ApiResponse.success(TASK_MESSAGES.FETCHED, {
        items: tasks,
        pagination: {
        page,
        limit,
        results: tasks.length,
        },
        }),
    );
});

export const updateTask = async (req, res) => {
    const tasks = await Task.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
    runValidators: true,
    });

    if (!tasks) {
    return res.status(404).json(ApiResponse.fail("There is no id match the task"));}
    return res.status(200).json(ApiResponse.success(TASK_MESSAGES.UPDATED, tasks));
};

export const deleteTask = expressAsyncHandler(async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
        return res.status(404).json(ApiResponse.fail("task not found"));
    }

    return res.status(200).json(ApiResponse.success(TASK_MESSAGES.DELETED, task));
});
