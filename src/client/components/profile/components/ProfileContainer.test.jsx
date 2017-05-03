import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { ProfileContainer } from './ProfileContainer'

jest.mock('material-ui/TextField')
jest.mock('../../alert')
jest.mock('../../spacer')
jest.mock('../../dialog')
jest.mock('../../container')

describe('<ProfileContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ProfileContainer
        fetchProfile={() => {}}
        updateProfile={() => {}}
        errors={{}}
        profile={{
          id: 1,
          firstName: 'Geert',
          lastName: 'Geerts',
          email: 'geert@email.com'
        }}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('updates profile state after onChange call', () => {
    const wrapper = shallow(
      <ProfileContainer
        fetchProfile={() => {}}
        updateProfile={() => {}}
        errors={{}}
        profile={{
          id: 1,
          firstName: 'Geert',
          lastName: 'Geerts',
          email: 'geert@email.com'
        }}
      />
    )
    const event = {
      target: {
        name: 'firstName',
        value: 'updated'
      }
    }
    const expected = {
      ...wrapper.state('profile'),
      [event.target.name]: event.target.value
    }

    wrapper.instance().onChange(event)
    expect(wrapper.state('profile')).toEqual(expected)
  })

  it('processes submits', () => {
    const wrapper = mount(
      <ProfileContainer
        fetchProfile={() => {}}
        updateProfile={jest.fn()}
        errors={{}}
        profile={{
          id: 1,
          firstName: 'Geert',
          lastName: 'Geerts',
          email: 'geert@email.com'
        }}
      />
    )
    const event = {
      preventDefault: jest.fn()
    }
    const profileWithId = {
      ...wrapper.state('profile'),
      id: 1
    }

    wrapper.instance().onSubmit(event)
    expect(event.preventDefault).toHaveBeenCalled()
    expect(wrapper.prop('updateProfile')).toHaveBeenCalledWith(profileWithId)
  })

  it('handles incoming props', () => {
    const oldProfile = {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
      firstName: 'Geert',
      lastName: 'Geerts',
      email: 'geert@email.com'
    }
    const newProfile = {
      firstName: 'John',
      lastName: 'Johnson',
      email: 'john@john.com'
    }
    const wrapper = mount(
      <ProfileContainer
        fetchProfile={() => {}}
        updateProfile={() => {}}
        errors={{}}
        profile={{ ...oldProfile, id: 1 }}
      />
    )
    wrapper.setProps({
      profile: { ...newProfile, id: 2 }
    })

    expect(wrapper.state('profile')).toEqual({ ...oldProfile, ...newProfile })
  })
})
