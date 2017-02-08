import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${props => props.muiTheme.palette.alternateTextColor};
`

export default muiThemeable()(Title)
