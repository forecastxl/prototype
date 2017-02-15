import muiThemeable from 'material-ui/styles/muiThemeable'
import styled, { keyframes } from 'styled-components'
import styles from '../../../styles'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const AlertWrapper = styled.div`
  background: ${styles.colors.error};
  font-weight: bold;
  font-size: 0.75rem;
  color: ${props => props.muiTheme.palette.alternateTextColor};
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  animation: ${fadeIn} 200ms linear;
`

export default muiThemeable()(AlertWrapper)
