import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { RaisedButton } from 'material-ui'
import { DumbHeader } from './Header'

describe('<DumbHeader />', () => {
  it('renders with login button when we are not authenticated', () => {
    const wrapper = shallow(<DumbHeader hasAuth={false} history={{}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders with a profile widget when we are authenticated', () => {
    const wrapper = shallow(<DumbHeader hasAuth history={{}} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('navigates to the login page when clicking the login button', () => {
    const push = jest.fn()
    const wrapper = shallow(<DumbHeader hasAuth={false} history={{ push }} />)
    wrapper.find(RaisedButton).simulate('click')
    expect(push).toBeCalledWith('/login')
  })
})
