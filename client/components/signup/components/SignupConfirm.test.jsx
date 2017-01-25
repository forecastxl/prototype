import React from 'react'
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import { SignupConfirm } from './SignupConfirm'

describe('<SignupConfirm />', () => {
  it('renders a warning on a missing token', () => {
    const wrapper = mount(
      <SignupConfirm
        confirmAccount={() => {}}
        errors={{}}
        isFetching={false}
      />
    )
    expect(mountToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a message while fetching', () => {
    const wrapper = mount(
      <SignupConfirm
        confirmAccount={() => {}}
        errors={{}}
        isFetching
      />
    )

    wrapper.setState({
      parsedToken: true,
      token: 'token'
    })

    expect(mountToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const wrapper = mount(
      <SignupConfirm
        confirmAccount={() => {}}
        errors={{ base: ['error message'] }}
        isFetching={false}
      />
    )

    wrapper.setState({
      parsedToken: true,
      token: 'token'
    })

    expect(mountToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a message on success', () => {
    const wrapper = mount(
      <SignupConfirm
        confirmAccount={() => {}}
        errors={{}}
        isFetching={false}
      />
    )

    wrapper.setState({
      parsedToken: true,
      token: 'token'
    })

    expect(mountToJson(wrapper)).toMatchSnapshot()
  })
})

