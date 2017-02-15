import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { AlertWrapper } from './AlertWrapper'

jest.mock('material-ui')

describe('<AlertWrapper />', () => {
  it('renders correctly', () => {
    const theme = {
      palette: {
        alternateTextColor: 'red'
      }
    }
    const wrapper = shallow(<AlertWrapper muiTheme={theme} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
