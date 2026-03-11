import express from "express"
import { createTask,deleteTask,getAllTasks, updateTask } from "../controllers/taskController.js"

const router = express.Router()

// router.post('/' , createTask)
// router.get('/',getAllTasks)
// router.patch('/:id' , updateTask)
// router.delete('/:id',deleteTask)

router.route('/').post(createTask).get(getAllTasks)
router.route('/:id').patch(updateTask).delete(deleteTask)

export default router;