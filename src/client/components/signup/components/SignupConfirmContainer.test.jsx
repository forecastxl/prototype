import React from 'react'
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import getUrlParameter from '../../../services/getUrlParameter'
import { SignupConfirmContainer } from './SignupConfirmContainer'

jest.mock('../../../services/getUrlParameter', () => jest.fn())

describe('<SignupConfirmContainer />', () => {
  it('confirms the account when mounted', () => {
    getUrlParameter.mockImplementationOnce(() => 'token')

    const spy = jest.fn()
    mount(<SignupConfirmContainer confirmAccount={spy} isFetching={false} />)

    expect(spy).toBeCalledWith('token')
  })

  it('renders a warning on a missing token', () => {
    getUrlParameter.mockImplementationOnce(() => false)

    const wrapper = mount(<SignupConfirmContainer confirmAccount={() => {}} isFetching={false} />)
    expect(mountToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a message while fetching', () => {
    const wrapper = mount(<SignupConfirmContainer confirmAccount={() => {}} isFetching />)

    wrapper.setState({
      token: 'token'
    })

    expect(mountToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a message on success', () => {
    getUrlParameter.mockImplementationOnce(() => 'token')

    const wrapper = mount(<SignupConfirmContainer confirmAccount={() => {}} isFetching={false} />)

    wrapper.setState({
      token: 'token'
    })

    expect(mountToJson(wrapper)).toMatchSnapshot()
  })
})
