import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ServerError from './ServerError'

describe('<ServerError />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ServerError errorMessage={'Error message.'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
