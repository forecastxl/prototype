import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Signup from './index'

describe('<Signup />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Signup />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
