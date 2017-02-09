import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import UserNavigation from './UserNavigation'

describe('<UserNavigation />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UserNavigation />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
