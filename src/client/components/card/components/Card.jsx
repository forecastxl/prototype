import { Card } from 'material-ui/Card'
import styled from 'styled-components'

const CardWrapper = styled(Card)`
  margin: ${props => props.marginTop} auto 0;
  width: ${props => props.width};
`

CardWrapper.defaultProps = {
  width: '25rem',
  marginTop: '5rem'
}

export default CardWrapper
