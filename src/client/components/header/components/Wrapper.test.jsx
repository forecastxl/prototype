/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbWrapper } from './Wrapper'

describe('<DumbWrapper />', () => {
  it('renders correctly', () => {
    const theme = {
      palette: {
        alternateTextColor: 'blue'
      }
    }
    const wrapper = shallow(<DumbWrapper muiTheme={theme} />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})
