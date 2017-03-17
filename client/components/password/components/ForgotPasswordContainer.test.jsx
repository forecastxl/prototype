import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { ForgotPasswordContainer } from './ForgotPasswordContainer'

jest.mock('material-ui/TextField')
jest.mock('material-ui/RaisedButton')
jest.mock('material-ui/Card')

describe('<ForgotPasswordContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ForgotPasswordContainer
        errors={{}}
        requestResetPassword={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('updates email state', () => {
    const wrapper = shallow(
      <ForgotPasswordContainer
        errors={{}}
        requestResetPassword={() => {}}
      />
    )
    const event = {
      target: {
        name: 'email',
        value: 'updated'
      }
    }
    const expected = event.target.value

    wrapper.instance().changeEmail(event)
    expect(wrapper.state('email')).toEqual(expected)
  })

  it('processes a form submit', () => {
    const wrapper = mount(
      <ForgotPasswordContainer
        errors={{}}
        requestResetPassword={jest.fn()}
      />
    )
    const event = {
      preventDefault: jest.fn()
    }

    wrapper.instance().processForm(event)
    expect(event.preventDefault).toHaveBeenCalled()
    expect(wrapper.prop('requestResetPassword')).toHaveBeenCalledWith(wrapper.state('email'))
  })
})

