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
  it('renders a card wrapper at 100% width by default', () => {
    const wrapper = shallow(<CardWrapper />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })

  it('renders a card wrapper at small size when given size = small', () => {
    const wrapper = shallow(<CardWrapper size="small" />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })

  it('renders a card wrapper at medium size when given size = medium', () => {
    const wrapper = shallow(<CardWrapper size="medium" />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })

  it('renders a card wrapper at large size when given size = large', () => {
    const wrapper = shallow(<CardWrapper size="large" />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })

  it('renders a card wrapper at a specific width when given a width', () => {
    const wrapper = shallow(<CardWrapper width="20rem" />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})
