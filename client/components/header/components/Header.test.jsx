import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Header } from './Header'

describe('<Header />', () => {
  it('renders correctly when it has a token', () => {
    const wrapper = shallow(<Header hasToken />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when it does not have a token', () => {
    const wrapper = shallow(<Header hasToken={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
