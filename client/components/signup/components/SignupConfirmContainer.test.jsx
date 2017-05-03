import React from 'react'
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import { SignupConfirmContainer } from './SignupConfirmContainer'

describe('<SignupConfirmContainer />', () => {
  afterEach(() => {
    Object.defineProperty(window.location, 'search', {
      writable: true,
      value: ''
    })
  })

  it('confirms the account when mounted', () => {
    Object.defineProperty(window.location, 'search', {
      writable: true,
      value: '?token=token'
    })

    const spy = jest.fn()
    mount(<SignupConfirmContainer confirmAccount={spy} errors={{}} isFetching={false} />)

    expect(spy).toBeCalledWith('token')
  })

  it('renders a warning on a missing token', () => {
    const wrapper = mount(
      <SignupConfirmContainer confirmAccount={() => {}} errors={{}} isFetching={false} />
    )
    expect(mountToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a message while fetching', () => {
    const wrapper = mount(
      <SignupConfirmContainer confirmAccount={() => {}} errors={{}} isFetching />
    )

    wrapper.setState({
      parsedToken: true,
      token: 'token'
    })

    expect(mountToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const wrapper = mount(
      <SignupConfirmContainer
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
      <SignupConfirmContainer confirmAccount={() => {}} errors={{}} isFetching={false} />
    )

    wrapper.setState({
      parsedToken: true,
      token: 'token'
    })

    expect(mountToJson(wrapper)).toMatchSnapshot()
  })
})
