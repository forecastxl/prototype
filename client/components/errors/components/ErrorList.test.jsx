import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ErrorList from './ErrorList'

describe('<ErrorList />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ErrorList errors={['error']} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
