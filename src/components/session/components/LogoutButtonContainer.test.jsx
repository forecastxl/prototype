import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { LogoutButtonContainer } from './LogoutButtonContainer'

jest.mock('material-ui')

describe('<LogoutButtonContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LogoutButtonContainer
        logoutUser={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
