import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import BaseErrors from './BaseErrors'

describe('<BaseErrors />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BaseErrors errors={['error']} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
