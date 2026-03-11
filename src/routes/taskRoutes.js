import express from "express"
import { createTask,deleteTask,getAllTasks, updateTask } from "../controllers/taskController.js"
import { createTaskValidator } from "../utils/validators/taskValidator.js"

const router = express.Router()

// router.post('/' , createTask)
// router.get('/',getAllTasks)
// router.patch('/:id' , updateTask)
// router.delete('/:id',deleteTask)

router.route('/').get(getAllTasks).post(createTaskValidator, createTask);
router.route('/:id').patch(updateTask).delete(deleteTask)
export default router;