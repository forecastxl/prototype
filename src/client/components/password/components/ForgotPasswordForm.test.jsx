import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbForgotPasswordForm } from './ForgotPasswordForm'

describe('<ForgotPasswordForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DumbForgotPasswordForm onSubmit={() => {}} onChange={() => {}} email={''} errors={{}} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
