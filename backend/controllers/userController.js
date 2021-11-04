import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      lists: user.lists,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      lists: user.lists,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user
// @route   GET /api/users
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      lists: user.lists,
      token: req.headers.authorization.split(' ')[1],
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Create new list
// @route   POST /api/users/lists
// @access  Private
const createList = asyncHandler(async (req, res) => {
  const { title } = req.body

  const user = await User.findById(req.user._id)

  if (user) {
    const list = {
      title,
    }

    user.lists.push(list)

    await user.save()
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      lists: user.lists,
      token: req.headers.authorization.split(' ')[1],
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update list
// @route   PUT /api/users/lists/:id
// @access  Private
const updateList = asyncHandler(async (req, res) => {
  const { title } = req.body

  const user = await User.findById(req.user._id)
  const list = await user.lists.id(req.params.id)

  if (user && list) {
    list.title = title

    await user.save()
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      lists: user.lists,
      token: req.headers.authorization.split(' ')[1],
    })
  } else {
    res.status(404)
    throw new Error('User or list not found')
  }
})

// @desc    Delete list
// @route   DELETE /api/users/lists/:id
// @access  Private
const deleteList = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  const list = await user.lists.id(req.params.id)

  if (user && list) {
    list.remove()

    await user.save()
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      lists: user.lists,
      token: req.headers.authorization.split(' ')[1],
    })
  } else {
    res.status(404)
    throw new Error('User or list not found')
  }
})

// @desc    Create new task
// @route   POST /api/users/lists/:id
// @access  Private
const createTask = asyncHandler(async (req, res) => {
  const { title } = req.body

  const user = await User.findById(req.user._id)
  const list = await user.lists.id(req.params.id)

  if (user && list) {
    const task = {
      title,
    }

    list.tasks.push(task)

    await user.save()
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      lists: user.lists,
      token: req.headers.authorization.split(' ')[1],
    })
  } else {
    res.status(404)
    throw new Error('User or List not found')
  }
})

// @desc    Update task
// @route   PUT /api/users/lists/:listid/:taskid
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  const { title, checked } = req.body

  const user = await User.findById(req.user._id)
  const task = await user.lists
    .id(req.params.listid)
    .tasks.id(req.params.taskid)

  if (user && task) {
    task.title = title || task.title
    task.checked = checked

    await user.save()
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      lists: user.lists,
      token: req.headers.authorization.split(' ')[1],
    })
  } else {
    res.status(404)
    throw new Error('User or task not found')
  }
})

// @desc    Delete task
// @route   DELETE /api/users/lists/:listid/:taskid
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  const task = await user.lists
    .id(req.params.listid)
    .tasks.id(req.params.taskid)

  if (user && task) {
    task.remove()

    await user.save()
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      lists: user.lists,
      token: req.headers.authorization.split(' ')[1],
    })
  } else {
    res.status(404)
    throw new Error('User or task not found')
  }
})

export {
  registerUser,
  authUser,
  getUser,
  createList,
  createTask,
  updateList,
  updateTask,
  deleteList,
  deleteTask,
}
