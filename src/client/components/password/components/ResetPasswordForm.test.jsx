import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import getUrlParameter from '../../../services/getUrlParameter'
import { DumbResetPasswordForm } from './ResetPasswordForm'

jest.mock('../../../services/getUrlParameter', () => jest.fn())

describe('<DumbResetPasswordForm />', () => {
  it('warns of a missing token', () => {
    getUrlParameter.mockImplementationOnce(() => false)
    const wrapper = shallow(
      <DumbResetPasswordForm handleSubmit={() => {}} pristine submitting={false} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly', () => {
    getUrlParameter.mockImplementationOnce(() => 'token')
    const wrapper = shallow(
      <DumbResetPasswordForm handleSubmit={() => {}} pristine submitting={false} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const wrapper = shallow(
      <DumbResetPasswordForm handleSubmit={() => {}} pristine submitting={false} error="Error" />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('enables the submit button when touched and not submitting', () => {
    const wrapper = shallow(
      <DumbResetPasswordForm handleSubmit={() => {}} pristine={false} submitting={false} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
