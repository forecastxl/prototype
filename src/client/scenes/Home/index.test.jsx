import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Home from './index'

describe('<Home />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Home />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
