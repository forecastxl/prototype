import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Alert from './Alert'

describe('<Alert />', () => {
  it('renders a single message correctly', () => {
    const wrapper = shallow(
      <Alert
        messages={'message'}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders multiple messages correctly', () => {
    const wrapper = shallow(
      <Alert
        messages={['message', 'message']}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
