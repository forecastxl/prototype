import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Notification } from './Notification'

describe('<Notification />', () => {
  it('returns null when there are no notifications', () => {
    const wrapper = shallow(
      <Notification
        unsetNotification={() => {}}
        notification={{
          hasNotification: false,
          notification: ''
        }}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders notifications correctly', () => {
    const wrapper = shallow(
      <Notification
        unsetNotification={() => {}}
        notification={{
          hasNotification: true,
          notification: 'notification'
        }}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
