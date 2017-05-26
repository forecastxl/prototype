import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TextField from './TextField'

describe('<TextField />', () => {
  it('renders correctly', () => {
    const meta = { touched: false, error: false }
    const wrapper = shallow(<TextField input={{}} label={'label'} meta={meta} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors', () => {
    const meta = { touched: true, error: 'error' }
    const wrapper = shallow(<TextField input={{}} label={'label'} meta={meta} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
