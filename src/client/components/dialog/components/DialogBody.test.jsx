import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import DialogBody from './DialogBody'

jest.mock('material-ui/Card')

describe('<DialogBody />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DialogBody />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
