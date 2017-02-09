import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'

export const Wrapper = styled.header`
  background: ${props => props.muiTheme.palette.primary1Color};
  padding: 0.5rem 1rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export default muiThemeable()(Wrapper)
