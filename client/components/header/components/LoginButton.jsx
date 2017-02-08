import React from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import { GetThemeProp } from '../../theme'

const LoginButton = () => (
  <Link to="/login">
    <GetThemeProp prop="alternateTextColor">
      {color => <FlatButton style={{ color }} label="Login" />}
    </GetThemeProp>
  </Link>
)

export default LoginButton