import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DialogHeader } from './DialogHeader'

describe('<DialogHeader />', () => {
  it('renders correctly', () => {
    const theme = {
      palette: {
        primary1Color: 'blue'
      }
    }
    const wrapper = shallow(<DialogHeader muiTheme={theme} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
