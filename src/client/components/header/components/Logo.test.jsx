/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Logo from './Logo'

describe('<Logo />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Logo />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})
