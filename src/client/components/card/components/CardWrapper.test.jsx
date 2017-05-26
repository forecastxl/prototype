/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import CardWrapper from './CardWrapper'

jest.mock('material-ui/Card', () => ({
  Card: () => <div />
}))

describe('<CardWrapper />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CardWrapper />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})
