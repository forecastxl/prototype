/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import DialogFooter from './DialogFooter'

describe('<DialogFooter />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DialogFooter />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})
