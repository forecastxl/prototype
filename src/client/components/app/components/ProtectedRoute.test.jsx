import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbProtectedRoute } from './ProtectedRoute'

describe('<ProtectedRoute />', () => {
  it('renders a redirect when hasAuth is false', () => {
    const wrapper = shallow(
      <DumbProtectedRoute hasAuth={false} exact path="/" render={() => null} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders the route when hasAuth is true', () => {
    const wrapper = shallow(<DumbProtectedRoute hasAuth exact path="/" render={() => null} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
