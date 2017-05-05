import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ClientError from './ClientError'

describe('<ClientError />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ClientError errorMessage={'Error message.'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
