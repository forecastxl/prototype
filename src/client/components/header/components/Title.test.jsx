import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbTitle } from './Title'

describe('<Title />', () => {
  it('renders correctly', () => {
    const theme = {
      palette: {
        alternateTextColor: 'blue'
      }
    }
    const wrapper = shallow(<DumbTitle muiTheme={theme} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
