import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import AlertIcon from './AlertIcon'

describe('<AlertIcon />', () => {
  it('renders an error correctly', () => {
    const wrapper = shallow(
      <AlertIcon
        type={'error'}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a warning correctly', () => {
    const wrapper = shallow(
      <AlertIcon
        type={'warning'}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders info correctly', () => {
    const wrapper = shallow(
      <AlertIcon
        type={'info'}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders a success correctly', () => {
    const wrapper = shallow(
      <AlertIcon
        type={'success'}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
