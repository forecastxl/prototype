import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import LoginForm from './LoginForm'

describe('<LoginForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LoginForm
        onChange={() => {}}
        onSubmit={() => {}}
        user={{
          name: '',
          password: ''
        }}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
