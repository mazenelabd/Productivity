import React from 'react'
import { Typography } from '@mui/material'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <Typography
        variant='body2'
        sx={{
          textAlign: 'center',
          py: 2,
        }}
      >
        Copyright &copy; MazenElabd @{year}
      </Typography>
    </footer>
  )
}

export default Footer
