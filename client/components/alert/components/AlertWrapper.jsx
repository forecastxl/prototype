import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'

export const AlertWrapper = styled.div`
  background: ${props => props.muiTheme.palette.primary3Color};
  color: ${props => props.muiTheme.palette.alternateTextColor};
  padding: 1rem;
`

export default muiThemeable()(AlertWrapper)
