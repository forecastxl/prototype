import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Title } from './Title'

describe('<Title />', () => {
  it('renders correctly', () => {
    const theme = {
      palette: {
        alternateTextColor: 'blue'
      }
    }
    const wrapper = shallow(<Title muiTheme={theme} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
