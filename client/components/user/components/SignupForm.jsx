import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'
import { ErrorList, TextFieldErrors } from '../../errors'
import { Dialog, DialogBody, DialogHeader, DialogButton } from '../../dialog'

const StyledForm = styled.form`
margin: 0 0 1.5rem;
`

function LoginForm({ onSubmit, onTextChange, onCheckboxChange, account, errors }) {
  return (
    <Dialog>
      <DialogHeader
        title="Create an account with ForecastXL"
        titleColor="white"
      />
      <DialogBody>
        {errors && errors.base && <ErrorList errors={errors.base} />}
        <StyledForm action="/" onSubmit={onSubmit}>
          <TextField
            floatingLabelText="First Name"
            name="firstName"
            value={account.firstName}
            onChange={onTextChange}
            fullWidth
            errorText={errors && errors.firstName && <TextFieldErrors errors={errors.firstName} />}
          /><br />
          <TextField
            floatingLabelText="Last Name"
            name="lastName"
            value={account.lastName}
            onChange={onTextChange}
            fullWidth
            errorText={errors && errors.lastName && <TextFieldErrors errors={errors.lastName} />}
          /><br />
          <TextField
            floatingLabelText="Company Name"
            name="companyName"
            value={account.companyName}
            onChange={onTextChange}
            fullWidth
            errorText={
              errors &&
                errors.companyName &&
                <TextFieldErrors errors={errors.companyName} />
            }
          /><br />
          <TextField
            floatingLabelText="Phone Number"
            name="phoneNumber"
            type="tel"
            value={account.phoneNumber}
            onChange={onTextChange}
            fullWidth
            errorText={
              errors &&
                errors.phoneNumber &&
                <TextFieldErrors errors={errors.phoneNumber} />
            }
          /><br />
          <TextField
            floatingLabelText="Email"
            name="email"
            type="email"
            value={account.email}
            onChange={onTextChange}
            fullWidth
            errorText={errors && errors.email && <TextFieldErrors errors={errors.email} />}
          /><br />
          <TextField
            floatingLabelText="Password"
            name="password"
            type="password"
            value={account.password}
            onChange={onTextChange}
            fullWidth
            errorText={errors && errors.password && <TextFieldErrors errors={errors.password} />}
          /><br />
          <TextField
            floatingLabelText="Repeat password"
            name="passwordConfirmation"
            type="password"
            value={account.passwordConfirmation}
            onChange={onTextChange}
            fullWidth
            errorText={
              errors &&
                errors.passwordConfirmation &&
                <TextFieldErrors errors={errors.passwordConfirmation} />
            }
          /><br />
          {
            errors &&
              errors.agreedToGeneralTerms &&
              <ErrorList errors={errors.agreedToGeneralTerms} />
          }
          <Checkbox
            label="I agree to the terms and conditions"
            name="agreedToGeneralTerms"
            checked={account.agreedToGeneralTerms}
            onCheck={onCheckboxChange}
          /><br />
          <DialogButton type="submit" label="Sign up" primary fullWidth />
        </StyledForm>
      </DialogBody>
    </Dialog>
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
  }).isRequired
}

export default LoginForm
