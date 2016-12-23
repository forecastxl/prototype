import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Login from './Login'

describe('<Login />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Login />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
