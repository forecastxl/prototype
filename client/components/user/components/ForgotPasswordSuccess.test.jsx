import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ForgotPasswordSuccess from './ForgotPasswordSuccess'

describe('<ForgotPasswordSuccess />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ForgotPasswordSuccess />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
