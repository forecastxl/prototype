import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { GetThemeProp } from './GetThemeProp'

describe('<GetThemeProp />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <GetThemeProp
        muiTheme={{ palette: { key: 'prop' } }}
        prop={'key'}
      >
        {prop => prop}
      </GetThemeProp>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
