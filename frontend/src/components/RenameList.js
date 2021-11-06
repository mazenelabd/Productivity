import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch } from 'react-redux'
import { updateList } from '../actions/userActions'

const RenameList = ({ id }) => {
  const [toggle, setToggle] = useState(false)
  const [title, setTitle] = useState('')
  const [valid, setValid] = useState(true)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) {
      setValid(false)
      return
    } else {
      dispatch(updateList({ title }, id))
      setTitle('')
      setToggle(!toggle)
      setValid(true)
    }
  }
  const handleClose = () => {
    setToggle(false)
    setValid(true)
  }

  return (
    <>
      <Dialog open={toggle} onClose={handleClose}>
        <DialogTitle>Change List Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {!valid && (
              <Alert severity='error'>
                <Typography component={'span'}>
                  The title can't be empty
                </Typography>
              </Alert>
            )}
          </DialogContentText>
          <TextField
            autoFocus
            label='List Title'
            variant='standard'
            value={title}
            size='small'
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setToggle(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Button
        variant='contained'
        sx={{
          mb: 1,
          mr: 1,
        }}
        onClick={() => setToggle(!toggle)}
        size='small'
      >
        {!toggle ? 'Rename List' : 'Cancel'}
      </Button>
    </>
  )
}

RenameList.propTypes = {
  id: PropTypes.string,
}

export default RenameList
