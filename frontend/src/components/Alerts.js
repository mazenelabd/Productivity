import React from 'react'
import Alert from '@mui/material/Alert'
import PropTypes from 'prop-types'

const Alerts = ({ severity, message }) => {
  return <Alert severity={severity}>{message}</Alert>
}

Alerts.propTypes = {
  severity: PropTypes.string,
  message: PropTypes.string,
}
export default Alerts
