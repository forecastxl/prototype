import PropTypes from 'prop-types'
import { Card as MuiCard } from 'material-ui/Card'
import styled from 'styled-components'

// Determine the width based on either a fixed width or a relative size indicator.
const determineCardWidth = ({ width, size }) => {
  let cssWidth = '100%'
  if (width) {
    cssWidth = width
  } else if (size) {
    // Note: these should change based on the viewport (should be responsive)
    switch (size) {
      case 'small':
        cssWidth = '40rem'
        break
      case 'medium':
        cssWidth = '60rem'
        break
      case 'large':
        cssWidth = '90rem'
        break
      default:
        throw new Error(`Unknown size '${size}'`)
    }
  }
  return cssWidth
}

const CardWrapper = styled(MuiCard)`
  margin: ${props => props.marginTop} auto 0;
  padding: ${props => props.padding};
  width: ${props => determineCardWidth(props)};
`

CardWrapper.propTypes = {
  marginTop: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

CardWrapper.defaultProps = {
  marginTop: '5rem',
  padding: '1rem'
}

export default CardWrapper
