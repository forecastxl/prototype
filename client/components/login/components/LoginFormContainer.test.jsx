import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { LoginFormContainer } from './LoginFormContainer'

jest.mock('material-ui/TextField')
jest.mock('material-ui/Card')
jest.mock('material-ui/RaisedButton')
jest.mock('react-router')

describe('<LoginFormContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LoginFormContainer
        errors={{}}
        login={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('updates user state', () => {
    const wrapper = shallow(
      <LoginFormContainer
        errors={{}}
        login={() => {}}
      />
    )
    const event = {
      target: {
        name: 'password',
        value: 'updated'
      }
    }
    const expected = {
      ...wrapper.state('user'),
      [event.target.name]: event.target.value
    }

    wrapper.instance().changeUser(event)
    expect(wrapper.state('user')).toEqual(expected)
  })

  it('processes logins', () => {
    const wrapper = mount(
      <LoginFormContainer
        errors={{}}
        login={jest.fn()}
      />
    )
    const event = {
      preventDefault: jest.fn()
    }

    wrapper.instance().processForm(event)
    expect(event.preventDefault).toHaveBeenCalled()
    expect(wrapper.prop('login')).toHaveBeenCalledWith(wrapper.state('user'))
  })
})

