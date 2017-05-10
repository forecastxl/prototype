import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import SignupConfirm from './index'

describe('<SignupConfirm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SignupConfirm />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
