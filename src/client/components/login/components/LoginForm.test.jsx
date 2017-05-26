import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { LoginForm } from './LoginForm'

describe('<LoginForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LoginForm handleSubmit={() => {}} submitting={false} valid={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
