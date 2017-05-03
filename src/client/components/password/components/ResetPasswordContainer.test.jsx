import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { ResetPasswordContainer } from './ResetPasswordContainer'

describe('<ResetPasswordContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ResetPasswordContainer
        hasToken
        errors={{}}
        onChange={() => {}}
        onSubmit={() => {}}
        password={''}
        passwordConfirmation={''}
        resetPassword={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('handles changes', () => {
    const wrapper = shallow(
      <ResetPasswordContainer
        hasToken
        errors={{}}
        onChange={() => {}}
        onSubmit={() => {}}
        password={''}
        passwordConfirmation={''}
        resetPassword={() => {}}
      />
    )
    const event = {
      target: {
        name: 'token',
        value: 'token'
      }
    }
    const expected = event.target.value

    wrapper.instance().handleChange(event)
    expect(wrapper.state('token')).toEqual(expected)
  })

  it('processes a form submit', () => {
    const wrapper = mount(
      <ResetPasswordContainer
        hasToken
        errors={{}}
        onChange={() => {}}
        onSubmit={() => {}}
        password={''}
        passwordConfirmation={''}
        resetPassword={jest.fn()}
      />
    )
    const event = {
      preventDefault: jest.fn()
    }

    wrapper.instance().processForm(event)
    expect(event.preventDefault).toHaveBeenCalled()
    expect(wrapper.prop('resetPassword')).toHaveBeenCalled()
  })
})
