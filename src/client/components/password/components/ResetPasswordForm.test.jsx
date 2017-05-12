import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbResetPasswordForm } from './ResetPasswordForm'

describe('<DumbResetPasswordForm />', () => {
  it('warns of a missing token', () => {
    const wrapper = shallow(
      <DumbResetPasswordForm
        hasToken={false}
        errors={{}}
        onSubmit={() => {}}
        onChange={() => {}}
        password={''}
        passwordConfirmation={''}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const wrapper = shallow(
      <DumbResetPasswordForm
        hasToken
        errors={{}}
        onSubmit={() => {}}
        onChange={() => {}}
        password={''}
        passwordConfirmation={''}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
