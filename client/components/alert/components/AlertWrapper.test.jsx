import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import AlertWrapper from './AlertWrapper'

describe('<AlertWrapper />', () => {
  it('renders an error correctly', () => {
    const wrapper = shallow(<AlertWrapper type={'error'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a warning correctly', () => {
    const wrapper = shallow(<AlertWrapper type={'warning'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders info correctly', () => {
    const wrapper = shallow(<AlertWrapper type={'info'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a success correctly', () => {
    const wrapper = shallow(<AlertWrapper type={'success'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
