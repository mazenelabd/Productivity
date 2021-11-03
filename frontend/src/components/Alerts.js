import React from 'react'
import Alert from '@mui/material/Alert'

const Alerts = ({ severity, message }) => {
  return <Alert severity={severity}>{message}</Alert>
}

export default Alerts
