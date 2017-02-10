import React, { PropTypes } from 'react'
import { CardHeader } from 'material-ui/Card'
import muiThemeable from 'material-ui/styles/muiThemeable'

export function DialogHeader({ muiTheme, ...rest }) {
  return (
    <CardHeader style={{ background: muiTheme.palette.primary1Color }} {...rest} />
  )
}

DialogHeader.propTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default muiThemeable()(DialogHeader)
