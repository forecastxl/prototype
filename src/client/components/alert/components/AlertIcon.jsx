import React, { PropTypes } from 'react'
import SuccessIcon from 'material-ui/svg-icons/action/check-circle'
import InfoIcon from 'material-ui/svg-icons/action/info'
import ErrorIcon from 'material-ui/svg-icons/alert/error'
import WarningIcon from 'material-ui/svg-icons/alert/warning'
import styles from '../../../styles'

const iconStyles = {
  marginRight: '0.5em'
}

const map = {
  error: <ErrorIcon style={{ ...iconStyles, fill: styles.colors.errorText }} />,
  warning: <WarningIcon style={{ ...iconStyles, fill: styles.colors.warningText }} />,
  info: <InfoIcon style={{ ...iconStyles, fill: styles.colors.infoText }} />,
  success: <SuccessIcon style={{ ...iconStyles, fill: styles.colors.successText }} />
}

function AlertIcon({ type }) {
  return map[type]
}

AlertIcon.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired
}

export default AlertIcon
