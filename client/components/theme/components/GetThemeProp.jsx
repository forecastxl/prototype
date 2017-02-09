import React, { PropTypes } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

export const GetThemeProp = ({ children, muiTheme, prop }) => (
  <span>
    {children(muiTheme.palette[prop])}
  </span>
)

GetThemeProp.propTypes = {
  children: PropTypes.func.isRequired,
  muiTheme: PropTypes.object.isRequired,
  prop: PropTypes.string.isRequired
}

export default muiThemeable()(GetThemeProp)
