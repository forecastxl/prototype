import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbSignupForm } from './SignupForm'

describe('<DumbSignupForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DumbSignupForm handleSubmit={() => {}} pristine submitting={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
