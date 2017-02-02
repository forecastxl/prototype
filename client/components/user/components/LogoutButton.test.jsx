import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import LogoutButton from './LogoutButton'

describe('<LogoutButton />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LogoutButton
        onClick={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
