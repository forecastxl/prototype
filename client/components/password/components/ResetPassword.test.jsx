import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ResetPassword from './ResetPassword'

describe('<ResetPassword />', () => {
  it('warns of a missing token', () => {
    const wrapper = shallow(
      <ResetPassword
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
      <ResetPassword
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
