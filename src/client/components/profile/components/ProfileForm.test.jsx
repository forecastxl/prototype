import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbProfileForm } from './ProfileForm'

describe('<DumbProfileForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DumbProfileForm handleSubmit={() => {}} pristine submitting={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
