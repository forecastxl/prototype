import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'

const Aligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function LoginForm({ onSubmit, onChange, account, errors }) {
  return (
    <Aligner>
      <form action="/" onSubmit={onSubmit}>
        <TextField
          floatingLabelText="First Name"
          name="firstName"
          value={account.firstName}
          onChange={onChange}
          errorText={errors.base && errors.base.join(', ')}
        /><br />
        <TextField
          floatingLabelText="Last Name"
          name="lastName"
          value={account.lastName}
          onChange={onChange}
          errorText={errors.base && errors.base.join(', ')}
        /><br />
        <TextField
          floatingLabelText="Company Name"
          name="companyName"
          value={account.companyName}
          onChange={onChange}
          errorText={errors.base && errors.base.join(', ')}
        /><br />
        <TextField
          floatingLabelText="Phone Number"
          name="phoneNumber"
          type="tel"
          value={account.phoneNumber}
          onChange={onChange}
          errorText={errors.base && errors.base.join(', ')}
        /><br />
        <SelectField
          floatingLabelText="Locale"
          name="locale"
          value={account.locale}
          onChange={onChange}
          errorText={errors.base && errors.base.join(', ')}
        >
          <MenuItem value={'nl'} primaryText="Nederlands" />
          <MenuItem value={'en'} primaryText="English" />
        </SelectField><br />
        <TextField
          floatingLabelText="Email"
          name="email"
          type="email"
          value={account.email}
          onChange={onChange}
          errorText={errors.base && errors.base.join(', ')}
        /><br />
        <TextField
          floatingLabelText="Password"
          name="password"
          type="password"
          value={account.password}
          onChange={onChange}
          errorText={errors.base && errors.base.join(', ')}
        /><br />
        <TextField
          floatingLabelText="Repeat password"
          name="passwordConfirmation"
          type="password"
          value={account.passwordConfirmation}
          onChange={onChange}
          errorText={errors.base && errors.base.join(', ')}
        /><br />
        <Checkbox
          label="I agree to the terms and conditions"
        /><br />
        <TextField
          floatingLabelText="Do you agree with our terms"
          name="agreedToGeneralTerms"
          value={account.agreedToGeneralTerms}
          onChange={onChange}
          errorText={errors.base && errors.base.join(', ')}
        /><br />
        <RaisedButton type="submit" label="Sign up" primary />
      </form>
    </Aligner>
  )
}

LoginForm.propTypes = {
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  account: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirmation: PropTypes.string.isRequired,
    agreedToGeneralTerms: PropTypes.string.isRequired
  })
}

export default LoginForm
