import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'

export const DumbWrapper = styled.header`
  align-items: center;
  background: ${props => props.muiTheme.palette.primary1Color};
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
`

export default muiThemeable()(DumbWrapper)
