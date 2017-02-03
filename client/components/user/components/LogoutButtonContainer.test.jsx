import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { LogoutButtonContainer } from './LogoutButtonContainer'

describe('<LogoutButtonContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LogoutButtonContainer
        logout={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
