import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import Loader from '../components/Loader'
import Alerts from '../components/Alerts'

const Register = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo: loginInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo || loginInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect, loginInfo])

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
      setMessage('')
    }
  }

  return (
    <>
      <Typography variant='h5' mt={2} sx={{ textAlign: 'center' }}>
        Register
      </Typography>
      {loading && <Loader />}
      <Box component='form' onSubmit={handleSubmit}>
        <TextField
          id='outlined-name-input'
          onChange={(e) => setName(e.target.value)}
          value={name}
          label='Name'
          type='name'
          sx={{ my: 2 }}
          fullWidth
          autoFocus
          required
        />

        <TextField
          id='outlined-email-input'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label='Email Address'
          type='email'
          sx={{ mb: 2 }}
          fullWidth
          required
        />

        <PasswordInput
          password={password}
          showPassword={showPassword}
          setPassword={setPassword}
          handleClickShowPassword={handleClickShowPassword}
          value='Password'
        />

        <PasswordInput
          password={confirmPassword}
          showPassword={showPassword}
          setPassword={setConfirmPassword}
          handleClickShowPassword={handleClickShowPassword}
          value='Confirm Password'
        />
        {message && <Alerts severity='error' message={message} />}
        {error && <Alerts severity='error' message={error} />}

        <Button
          variant='contained'
          sx={{
            display: 'flex',
            mx: 'auto',
            mt: 2,
          }}
          type='submit'
          disabled={!name || !email || !password || !confirmPassword}
        >
          REGISTER
        </Button>
      </Box>
      <Typography variant='body2' sx={{ textAlign: 'center' }} my={2}>
        Already Have an Account?{'   '}
        <Link
          variant='body1'
          underline='none'
          component={RouterLink}
          to={redirect ? `/login?redirect=${redirect}` : '/login'}
          sx={{ fontWeight: 'bold' }}
        >
          Login
        </Link>
      </Typography>
    </>
  )
}

export default Register
