/**
 * @jest-environment node
 */

import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Dialog from './Dialog'

jest.mock('material-ui/Card', () => ({
  Card: () => <div />
}))

describe('<Dialog />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Dialog />)
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot()
  })
})
