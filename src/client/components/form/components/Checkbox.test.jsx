import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Checkbox from './Checkbox'

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const input = { value: 'Input', onChange: () => {} }
    const meta = { touched: false, error: '' }
    const wrapper = shallow(<Checkbox label="Label" input={input} meta={meta} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders errors correctly', () => {
    const input = { value: 'Input', onChange: () => {} }
    const meta = { touched: true, error: 'Error' }
    const wrapper = shallow(<Checkbox label="Label" input={input} meta={meta} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
