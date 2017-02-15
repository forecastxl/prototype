import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Alert from './Alert'

describe('<Alert />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Alert
        messages={['message', 'message']}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
