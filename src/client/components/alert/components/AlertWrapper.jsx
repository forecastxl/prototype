import { oneOf } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { boxShadow, colors } from '../../../styles'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const setBackground = props => {
  const map = {
    error: colors.red,
    warning: colors.yellow,
    info: colors.blue,
    success: colors.green
  }

  return map[props.type]
}

const setColor = props => {
  const map = {
    error: colors.darkRed,
    warning: colors.darkYellow,
    info: colors.darkBlue,
    success: colors.darkGreen
  }

  return map[props.type]
}

const AlertWrapper = styled.div`
  align-items: center;
  animation: ${fadeIn} 200ms linear;
  background: ${setBackground};
  border-radius: 3px;
  box-shadow: ${boxShadow};
  color: ${setColor};
  display: flex;
  margin-bottom: 0.5rem;
  padding: 1rem 0.5rem;
`

AlertWrapper.propTypes = {
  type: oneOf(['error', 'warning', 'info', 'success']).isRequired
}

export default AlertWrapper
