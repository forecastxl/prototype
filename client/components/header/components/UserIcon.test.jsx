import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { UserIcon } from './UserIcon'

describe('<UserIcon />', () => {
  it('renders correctly', () => {
    const theme = {
      palette: {
        alternateTextColor: 'blue'
      }
    }
    const wrapper = shallow(<UserIcon muiTheme={theme} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
