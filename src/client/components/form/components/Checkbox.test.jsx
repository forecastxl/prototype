import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Checkbox from './Checkbox'

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const input = { value: 'Input', onChange: () => {} }
    const wrapper = shallow(<Checkbox label="Label" input={input} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
