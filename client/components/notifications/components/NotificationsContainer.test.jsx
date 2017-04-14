import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { NotificationsContainer } from './NotificationsContainer'

describe('<NotificationsContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NotificationsContainer notifications={['message']} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when there are no notifications', () => {
    const wrapper = shallow(<NotificationsContainer notifications={[]} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
