import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import Fab from '@mui/material/Fab'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'
import { useDispatch } from 'react-redux'
import { createTask } from '../actions/userActions'

const AddTask = ({ listId }) => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [title, setTitle] = useState('')
  const [valid, setValid] = useState(true)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleToggle = (event) => {
    setShowAddTask(!showAddTask)
    setValid(true)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      setValid(false)
      return
    } else {
      dispatch(createTask({ title }, listId))
      setTitle('')
      setValid(true)
    }
  }

  return (
    <>
      <Slide direction='right' in={showAddTask} mountOnEnter unmountOnExit>
        <Box
          component='form'
          sx={{
            display: 'inline-block',
          }}
          noValidate
          autoComplete='off'
          onSubmit={onSubmit}
        >
          <TextField
            error={!valid}
            label='New Task'
            variant='outlined'
            value={title}
            onChange={handleChange}
            size='small'
            helperText={!valid && 'Enter a value.'}
            autoFocus
          />

          <Button
            aria-label='add task'
            variant='contained'
            type='submit'
            sx={{ ml: 1 }}
          >
            Add
          </Button>
        </Box>
      </Slide>
      <Tooltip title={showAddTask ? 'Cancel' : 'Add Task'}>
        <Fab
          color='primary'
          aria-label='add task'
          sx={{ float: 'right' }}
          onClick={handleToggle}
        >
          {showAddTask ? <CloseIcon /> : <AddIcon />}
        </Fab>
      </Tooltip>
    </>
  )
}

AddTask.propTypes = {
  listId: PropTypes.string,
}

export default AddTask
