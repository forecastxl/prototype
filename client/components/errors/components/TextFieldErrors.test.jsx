import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TextFieldErrors from './TextFieldErrors'

describe('<TextFieldErrors />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextFieldErrors errors={['error']} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
