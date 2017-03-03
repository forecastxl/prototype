import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Scene from './index'

describe('<Scene />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Scene />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
