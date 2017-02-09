import React from 'react'
import SocialPerson from 'material-ui/svg-icons/social/person'
import { GetThemeProp } from '../../theme'

function UserIcon() {
  return (
    <GetThemeProp prop="alternateTextColor">
      {color => <SocialPerson style={{ color }} />}
    </GetThemeProp>
  )
}

export default UserIcon
