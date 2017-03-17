import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import NotificationBox from './NotificationBox'

describe('<NotificationBox />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NotificationBox />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

