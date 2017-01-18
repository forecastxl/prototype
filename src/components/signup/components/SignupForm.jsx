import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

function LoginForm({ onSubmit, onTextChange, onCheckboxChange, account, errors }) {
  return (
    <form action="/" onSubmit={onSubmit}>
      <TextField
        floatingLabelText="First Name"
        name="firstName"
        value={account.firstName}
        onChange={onTextChange}
        errorText={errors.base && errors.base.join(', ')}
      /><br />
      <TextField
        floatingLabelText="Last Name"
        name="lastName"
        value={account.lastName}
        onChange={onTextChange}
        errorText={errors.base && errors.base.join(', ')}
      /><br />
      <TextField
        floatingLabelText="Company Name"
        name="companyName"
        value={account.companyName}
        onChange={onTextChange}
        errorText={errors.base && errors.base.join(', ')}
      /><br />
      <TextField
        floatingLabelText="Phone Number"
        name="phoneNumber"
        type="tel"
        value={account.phoneNumber}
        onChange={onTextChange}
        errorText={errors.base && errors.base.join(', ')}
      /><br />
      <TextField
        floatingLabelText="Email"
        name="email"
        type="email"
        value={account.email}
        onChange={onTextChange}
        errorText={errors.base && errors.base.join(', ')}
      /><br />
      <TextField
        floatingLabelText="Password"
        name="password"
        type="password"
        value={account.password}
        onChange={onTextChange}
        errorText={errors.base && errors.base.join(', ')}
      /><br />
      <TextField
        floatingLabelText="Repeat password"
        name="passwordConfirmation"
        type="password"
        value={account.passwordConfirmation}
        onChange={onTextChange}
        errorText={errors.base && errors.base.join(', ')}
      /><br />
      <Checkbox
        label="I agree to the terms and conditions"
        name="agreedToGeneralTerms"
        checked={account.agreedToGeneralTerms}
        onCheck={onCheckboxChange}
      /><br />
      <RaisedButton type="submit" label="Sign up" primary />
    </form>
  )
}

LoginForm.propTypes = {
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  account: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirmation: PropTypes.string.isRequired,
    agreedToGeneralTerms: PropTypes.bool.isRequired
  })
}

export default LoginForm
