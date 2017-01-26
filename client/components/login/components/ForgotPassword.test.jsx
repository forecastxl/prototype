import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ForgotPassword from './ForgotPassword'

describe('<ForgotPassword />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ForgotPassword />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
