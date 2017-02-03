import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import SignupSuccess from './SignupSuccess'

describe('<SignupSuccess />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SignupSuccess />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
