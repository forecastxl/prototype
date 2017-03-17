import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Notification from './Notification'

describe('<Notification />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Notification />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
