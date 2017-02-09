import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import UserIcon from './UserIcon'

describe('<UserIcon />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UserIcon />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
