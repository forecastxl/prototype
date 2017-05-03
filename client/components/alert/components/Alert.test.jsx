import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Alert from './Alert'

describe('<Alert />', () => {
  it('renders an error correctly', () => {
    const wrapper = shallow(<Alert message={'message'} type={'error'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a warning correctly', () => {
    const wrapper = shallow(<Alert message={'message'} type={'warning'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders info correctly', () => {
    const wrapper = shallow(<Alert message={'message'} type={'info'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a success correctly', () => {
    const wrapper = shallow(<Alert message={'message'} type={'success'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
