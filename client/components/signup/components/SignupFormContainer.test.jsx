import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { SignupFormContainer } from './SignupFormContainer'

jest.mock('material-ui/Card')
jest.mock('material-ui/TextField')
jest.mock('material-ui/RaisedButton')
jest.mock('material-ui/Checkbox')

describe('<SignupFormContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SignupFormContainer
        errors={{}}
        createAccount={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('updates account state text', () => {
    const wrapper = shallow(
      <SignupFormContainer
        errors={{}}
        createAccount={() => {}}
      />
    )
    const event = {
      target: {
        name: 'password',
        value: 'updated'
      }
    }
    const expected = {
      ...wrapper.state('account'),
      [event.target.name]: event.target.value
    }

    wrapper.instance().changeAccountText(event)
    expect(wrapper.state('account')).toEqual(expected)
  })

  it('updates account state checkbox', () => {
    const wrapper = shallow(
      <SignupFormContainer
        errors={{}}
        createAccount={() => {}}
      />
    )
    const event = {
      target: {
        name: 'agreedToGeneralTerms',
        checked: true
      }
    }
    const expected = {
      ...wrapper.state('account'),
      [event.target.name]: event.target.checked
    }

    wrapper.instance().changeAccountCheckbox(event)
    expect(wrapper.state('account')).toEqual(expected)
  })

  it('processes logins', () => {
    const wrapper = mount(
      <SignupFormContainer
        errors={{}}
        createAccount={jest.fn()}
      />
    )
    const event = {
      preventDefault: jest.fn()
    }

    wrapper.instance().processForm(event)
    expect(event.preventDefault).toHaveBeenCalled()
    expect(wrapper.prop('createAccount')).toHaveBeenCalledWith(wrapper.state('account'))
  })
})
