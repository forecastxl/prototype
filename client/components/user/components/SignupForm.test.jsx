import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import SignupForm from './SignupForm'

describe('<SignupForm />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SignupForm
        errors={{}}
        onTextChange={() => {}}
        onCheckboxChange={() => {}}
        onSubmit={() => {}}
        account={{
          firstName: '',
          lastName: '',
          companyName: '',
          phoneNumber: '',
          email: '',
          password: '',
          passwordConfirmation: '',
          agreedToGeneralTerms: false
        }}
      />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
