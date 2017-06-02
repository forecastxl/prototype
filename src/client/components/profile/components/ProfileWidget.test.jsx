import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { DumbProfileWidget } from './ProfileWidget'

describe('<DumbProfileWidget />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DumbProfileWidget
        history={{}}
        profile={{
          name: 'John Doe'
        }}
        fetchProfile={() => {}}
        logout={() => {}}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
