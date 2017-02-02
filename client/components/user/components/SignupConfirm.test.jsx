import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import SignupConfirm from './SignupConfirm'

describe('<SignupConfirm />', () => {
  it('renders a message for missing tokens', () => {
    const wrapper = shallow(
      <SignupConfirm
        hasToken={false}
        isFetching={false}
        errors={{}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a message while fetching', () => {
    const wrapper = shallow(
      <SignupConfirm
        hasToken
        isFetching
        errors={{}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const wrapper = shallow(
      <SignupConfirm
        hasToken
        isFetching={false}
        errors={{ token: ['Something went wrong'] }}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a message when confirm was successful', () => {
    const wrapper = shallow(
      <SignupConfirm
        hasToken
        isFetching={false}
        errors={{}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
