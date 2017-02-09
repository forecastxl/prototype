import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import LoginButton from './LoginButton'

describe('<LoginButton />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LoginButton />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
