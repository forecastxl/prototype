import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Profile from './index'

describe('<Profile />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Profile />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
