import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import DeleteList from './DeleteList'
import RenameList from './RenameList'
import AddTask from './AddTask'
import TabPanel from './TabPanel'
import { useDispatch, useSelector } from 'react-redux'
import { createList, deleteTask, updateTask } from '../actions/userActions'
import Loader from './Loader'

const Tasks = ({ value }) => {
  const [title, setTitle] = useState('')
  const [valid, setValid] = useState(true)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const handleChange = (check, listId, taskId) => {
    dispatch(updateTask({ checked: !check }, listId, taskId))
  }

  const updateTitleHandler = (check, listId, taskId, title) => {
    dispatch(updateTask({ checked: check, title }, listId, taskId))
  }

  const deleteTaskHandler = (listId, taskId) => {
    dispatch(deleteTask(listId, taskId))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) {
      setValid(false)
      return
    } else {
      dispatch(createList({ title }))
      setTitle('')
      setValid(true)
    }
  }

  return !userInfo ? (
    <Loader />
  ) : (
    <>
      {userInfo.lists.map((list, index) => (
        <TabPanel value={value} index={index} key={list._id}>
          <Box mb={1}>
            <RenameList id={list._id} />
            <DeleteList id={list._id} />
          </Box>
          {list.tasks.map((task) => (
            <Box
              key={task._id}
              mb={2}
              component='form'
              noValidate
              autoComplete='off'
              onSubmit={(e) => e.preventDefault()}
              data-cy={task.title}
            >
              <Checkbox
                checked={task.checked}
                onClick={() => handleChange(task.checked, list._id, task._id)}
                inputProps={{ 'aria-label': 'check task' }}
              />
              <TextField
                defaultValue={task.title}
                variant='standard'
                sx={{ width: '50%' }}
                onBlur={(event) =>
                  event.target.value
                    ? updateTitleHandler(
                        task.checked,
                        list._id,
                        task._id,
                        event.target.value
                      )
                    : (event.target.value = task.title)
                }
                disabled={task.checked}
              />
              <Button
                aria-label='delete task'
                onClick={() => deleteTaskHandler(list._id, task._id)}
                color='error'
                size='small'
              >
                <DeleteIcon />
              </Button>
            </Box>
          ))}
          <AddTask listId={list._id} />
        </TabPanel>
      ))}

      <TabPanel value={value} index={userInfo.lists.length}>
        <Box
          component='form'
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <TextField
            label='List Title'
            variant='outlined'
            size='small'
            sx={{ mr: 1 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <Button type='submit' variant='contained'>
            Create
          </Button>
          {!valid && (
            <Alert
              severity='error'
              sx={{ width: 'max-content', mx: 'auto', my: 1 }}
            >
              <Typography component={'span'}>
                The title can't be empty
              </Typography>
            </Alert>
          )}
        </Box>
      </TabPanel>
    </>
  )
}

Tasks.propTypes = {
  value: PropTypes.number,
}

export default Tasks
