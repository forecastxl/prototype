import styled from 'styled-components'

const Spacer = styled.div`
  margin-top: ${props => props.top || props.vertical ? props.size : 0};
  margin-bottom: ${props => props.bottom || props.vertical ? props.size : 0};
  margin-left: ${props => props.left || props.horizontal ? props.size : 0};
  margin-right: ${props => props.right || props.horizontal ? props.size : 0};
`

Spacer.defaultProps = {
  size: '1rem'
}

export default Spacer
