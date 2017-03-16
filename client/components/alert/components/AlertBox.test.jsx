import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { AlertBox } from './AlertBox'

jest.mock('material-ui')

describe('<AlertBox />', () => {
  it('renders correctly', () => {
    const theme = {
      palette: {
        alternateTextColor: 'red'
      }
    }
    const wrapper = shallow(<AlertBox muiTheme={theme} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
