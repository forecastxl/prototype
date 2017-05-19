import React, { PropTypes } from 'react'
import { Card } from 'material-ui/Card'
import styled from 'styled-components'

const SIZE = { small: 'small', medium: 'medium', large: 'large' }

// Determine the width based on either a fixed width or a relative size indicator.
const determineWidth = ({ width, size }) => {
  let cssWidth = '100%'
  if (width) {
    cssWidth = width
  } else if (size) {
    // Note: these should change based on the viewport (should be responsive)
    switch (size) {
      case SIZE.small:
        cssWidth = '40rem'
        break
      case SIZE.medium:
        cssWidth = '60rem'
        break
      case SIZE.large:
        cssWidth = '90rem'
        break
      default:
        throw new Error(`Unknown size ${size}`)
    }
  }
  return cssWidth
}

const CardWrapper = styled(Card)`
  margin: ${props => props.marginTop} auto 0;
  padding: ${props => props.padding};
  width: ${props => determineWidth(props)};
`

CardWrapper.propTypes = {
  title: PropTypes.string,
  marginTop: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE))
}

CardWrapper.defaultProps = {
  marginTop: '5rem',
  padding: '2rem'
}

const CardTitle = styled.div`
  background: #2c3e50;
  color: #fff;
  font-size: 1.6rem;
  padding: 1rem;
  text-align: center;
`

const CardWithTitle = props => {
  if (props.title) {
    return (
      <CardWrapper {...props} padding="0">
        <CardTitle>{props.title}</CardTitle>
        <div style={{ padding: props.padding }}>
          {props.children}
        </div>
      </CardWrapper>
    )
  }
  return CardWrapper
}

CardWithTitle.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  padding: PropTypes.string
}

CardWithTitle.defaultProps = {
  title: undefined,
  padding: undefined
}

// Expose the SIZE enum directly on the component
CardWithTitle.SIZE = SIZE

export default CardWithTitle
