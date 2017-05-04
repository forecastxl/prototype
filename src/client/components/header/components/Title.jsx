import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'

export const DumbTitle = styled.h1`
  color: ${props => props.muiTheme.palette.alternateTextColor};
  font-size: 1.25rem;
  font-weight: 400;
`

export default muiThemeable()(DumbTitle)
