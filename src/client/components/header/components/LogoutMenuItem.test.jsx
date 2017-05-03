import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { LogoutMenuItem } from './LogoutMenuItem'

describe('<LogoutMenuItem />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LogoutMenuItem destroySession={() => {}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('calls destroySession on click', () => {
    const spy = jest.fn()
    const wrapper = shallow(<LogoutMenuItem destroySession={spy} />)
    wrapper.simulate('click')

    expect(spy).toHaveBeenCalled()
  })
})
