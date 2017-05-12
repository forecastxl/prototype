import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbLogoutMenuItem } from './LogoutMenuItem'

describe('<DumbLogoutMenuItem />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DumbLogoutMenuItem destroySession={() => {}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('calls destroySession on click', () => {
    const spy = jest.fn()
    const wrapper = shallow(<DumbLogoutMenuItem destroySession={spy} />)
    wrapper.simulate('click')

    expect(spy).toHaveBeenCalled()
  })
})
