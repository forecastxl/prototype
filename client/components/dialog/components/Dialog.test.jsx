import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Dialog from './Dialog'

describe('<Dialog />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Dialog />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
