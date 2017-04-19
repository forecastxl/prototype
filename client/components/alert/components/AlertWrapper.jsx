import { PropTypes } from 'react'
import styled, { keyframes } from 'styled-components'
import styles from '../../../styles'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const setBackground = props => {
  const map = {
    error: styles.colors.errorBackground,
    warning: styles.colors.warningBackground,
    info: styles.colors.infoBackground,
    success: styles.colors.successBackground
  }

  return map[props.type]
}

const setColor = props => {
  const map = {
    error: styles.colors.errorText,
    warning: styles.colors.warningText,
    info: styles.colors.infoText,
    success: styles.colors.successText
  }

  return map[props.type]
}

const AlertWrapper = styled.div`
  align-items: center;
  animation: ${fadeIn} 200ms linear;
  background: ${setBackground};
  border-radius: 3px;
  box-shadow: ${styles.boxShadow};
  color: ${setColor};
  display: flex;
  margin-bottom: 0.5rem;
  padding: 1rem 0.5rem;
`

AlertWrapper.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired
}

export default AlertWrapper
