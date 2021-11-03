import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import Loader from '../components/Loader'
import Alerts from '../components/Alerts'

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      {loading && <Loader />}

      <Typography sx={{ textAlign: 'center', mt: 2 }} variant='h5'>
        LOGIN
      </Typography>
      <Box component='form' onSubmit={handleSubmit}>
        <TextField
          id='outlined-email-input'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label='Email Address'
          type='email'
          sx={{ my: 2 }}
          fullWidth
          autoFocus
          error={error}
          required
        />

        <PasswordInput
          password={password}
          showPassword={showPassword}
          setPassword={setPassword}
          handleClickShowPassword={handleClickShowPassword}
          value='Password'
          error={error}
        />

        {error && <Alerts severity='error' message={error} />}

        <Button
          variant='contained'
          sx={{
            display: 'flex',
            mx: 'auto',
            mt: 2,
          }}
          type='submit'
          disabled={!email || !password}
        >
          LOGIN
        </Button>
      </Box>
      <Typography variant='body2' sx={{ textAlign: 'center' }} my={2}>
        Not a User?{'   '}
        <Link
          underline='none'
          component={RouterLink}
          to={redirect ? `/register?redirect=${redirect}` : '/register'}
          sx={{ fontWeight: 'bold' }}
          variant='body1'
        >
          Register
        </Link>
      </Typography>
    </>
  )
}

export default Login
