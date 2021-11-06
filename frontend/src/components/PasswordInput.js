import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import PropTypes from 'prop-types'

const PasswordInput = ({
  password,
  showPassword,
  setPassword,
  handleClickShowPassword,
  value,
  error,
  required,
}) => {
  return (
    <FormControl
      variant='outlined'
      sx={{ mb: 2 }}
      fullWidth
      error={error}
      required={required === 'false' ? false : true}
    >
      <InputLabel htmlFor='outlined-adornment-password'>{value}</InputLabel>
      <OutlinedInput
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={(e) => e.preventDefault()}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={value}
      />
    </FormControl>
  )
}

PasswordInput.propTypes = {
  password: PropTypes.string,
  showPassword: PropTypes.bool,
  setPassword: PropTypes.func,
  handleClickShowPassword: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
}

export default PasswordInput
