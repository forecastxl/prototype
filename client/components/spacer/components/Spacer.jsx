import styled from 'styled-components'

const Spacer = styled.div`
  margin-top: ${props => props.top || props.vertical ? '1.5rem' : 0};
  margin-bottom: ${props => props.bottom || props.vertical ? '1.5rem' : 0};
  margin-left: ${props => props.left || props.horizontal ? '1.5rem' : 0};
  margin-right: ${props => props.right || props.horizontal ? '1.5rem' : 0};
`

export default Spacer
