import React from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import { GetThemeProp } from '../../theme'

function LoginButton() {
  /* istanbul ignore next */
  return (
    <Link to="/login">
      <GetThemeProp prop="alternateTextColor">
        {color => <FlatButton style={{ color }} label="Login" />}
      </GetThemeProp>
    </Link>
  )
}

export default LoginButton
