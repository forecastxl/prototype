import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbLogin } from './index'

describe('<DumbLogin />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DumbLogin session={{}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders client errors', () => {
    const session = { errorName: 'ClientError', errorMessage: 'Client error' }
    const wrapper = shallow(<DumbLogin session={session} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders server errors', () => {
    const session = { errorName: 'ServerError', errorMessage: 'Server error' }
    const wrapper = shallow(<DumbLogin session={session} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
