import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { NotificationContainer } from './NotificationContainer'

describe('<NotificationContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NotificationContainer notifications={['message']} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when there are no notifications', () => {
    const wrapper = shallow(<NotificationContainer notifications={[]} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

