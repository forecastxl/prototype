import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../styles'
import CardWrapper from './CardWrapper'

const CardTitle = styled.div`
  background: ${colors.darkBlue};
  color: ${colors.white};
  font-size: 1.6rem;
  padding: 1rem;
  text-align: center;
`

const Card = props => {
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
  return <CardWrapper {...props} />
}

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  padding: PropTypes.string
}

// The following are left undefined, so as to let CardWrapper handle the defaults
Card.defaultProps = {
  children: undefined,
  title: undefined,
  padding: undefined
}

export default Card
