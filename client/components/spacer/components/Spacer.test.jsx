import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Spacer from './Spacer'

describe('<Spacer />', () => {
  it('renders correctly when top is set', () => {
    const wrapper = shallow(<Spacer top />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when bottom is set', () => {
    const wrapper = shallow(<Spacer bottom />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when left is set', () => {
    const wrapper = shallow(<Spacer left />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when right is set', () => {
    const wrapper = shallow(<Spacer right />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when vertical is set', () => {
    const wrapper = shallow(<Spacer vertical />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when horizontal is set', () => {
    const wrapper = shallow(<Spacer horizontal />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
