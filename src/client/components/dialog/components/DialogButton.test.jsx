import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import DialogButton from './DialogButton'

jest.mock('material-ui/RaisedButton')

describe('<DialogButton />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DialogButton />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
