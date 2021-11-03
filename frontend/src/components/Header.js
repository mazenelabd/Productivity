import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import Button from '@mui/material/Button'

const Header = ({ toggleColorMode }) => {
  const theme = useTheme()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Box display='flex' sx={{ pt: 3, justifyContent: 'space-between ' }}>
      <Typography variant='h5'>
        Tasks
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color='inherit'>
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Typography>
      {userInfo && <Button onClick={logoutHandler}>Logout</Button>}
    </Box>
  )
}

Header.propTypes = {
  toggleColorMode: PropTypes.func,
}

export default Header
