import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import Backdrop from '@mui/material/Backdrop'
import { useDispatch } from 'react-redux'
import { deleteList } from '../actions/userActions'

const DeleteList = ({ id }) => {
  const [toggle, setToggle] = useState(false)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(deleteList(id))
    setToggle(false)
  }

  return (
    <>
      <Button
        variant='contained'
        sx={{
          mb: 1,
        }}
        color='error'
        onClick={() => setToggle(!toggle)}
        size='small'
      >
        {!toggle ? 'Delete List' : 'Cancel'}
      </Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={toggle}
        onClick={() => setToggle(false)}
      >
        <Collapse in={toggle}>
          <Alert severity='error' sx={{ width: 'max-content', mx: 'auto' }}>
            Are you sure you want to delete this List
            <div>
              <ButtonGroup variant='contained' size='small' sx={{ mt: 1 }}>
                <Button onClick={() => setToggle(!toggle)}>Cancel</Button>
                <Button
                  color='error'
                  onClick={handleClick}
                  data-cy='delete-the-list'
                >
                  Delete
                </Button>
              </ButtonGroup>
            </div>
          </Alert>
        </Collapse>
      </Backdrop>
    </>
  )
}

DeleteList.propTypes = {
  id: PropTypes.string,
}

export default DeleteList
