import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'

import {
  authUser,
  registerUser,
  getUser,
  createList,
  createTask,
  updateList,
  updateTask,
  deleteList,
  deleteTask,
} from '../controllers/userController.js'

router.post('/login', authUser)
router.route('/').post(registerUser).get(protect, getUser)
router.route('/lists').post(protect, createList)

router
  .route('/lists/:id')
  .post(protect, createTask)
  .put(protect, updateList)
  .delete(protect, deleteList)
router
  .route('/lists/:listid/:taskid')
  .put(protect, updateTask)
  .delete(protect, deleteTask)

export default router
