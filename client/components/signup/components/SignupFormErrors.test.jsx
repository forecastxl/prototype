import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import SignupFormErrors from './SignupFormErrors'

describe('<SignupFormErrors />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SignupFormErrors errors={['error']} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
