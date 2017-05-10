import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ResetPassword from './index'

describe('<ResetPassword />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ResetPassword />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
