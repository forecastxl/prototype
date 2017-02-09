import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { LoginButton } from './LoginButton'

describe('<LoginButton />', () => {
  it('renders correctly', () => {
    const theme = {
      palette: {
        alternateTextColor: 'blue'
      }
    }
    const wrapper = shallow(<LoginButton muiTheme={theme} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
