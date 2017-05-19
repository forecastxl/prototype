/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Card from './Card'

jest.mock('material-ui/Card', () => ({
  Card: () => <div />
}))

describe('<Card />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Card />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})
