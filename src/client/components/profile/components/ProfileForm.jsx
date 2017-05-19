import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from '../../form'
import { Alert } from '../../alert'

export function DumbProfileForm({ handleSubmit, pristine, submitting, error }) {
  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert message={error} type={'error'} />}
      <Field name="firstName" component={TextField} label="Voornaam" fullWidth />
      <Field name="lastName" component={TextField} label="Achternaam" fullWidth />
      <Field name="email" component={TextField} label="Email" fullWidth />
      <RaisedButton
        type="submit"
        label="Wijzig profiel"
        primary
        fullWidth
        disabled={pristine || submitting}
      />
    </form>
  )
}

DumbProfileForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

DumbProfileForm.defaultProps = {
  error: ''
}

export default reduxForm({
  form: 'profile',
  onSubmit: onSubmitActions(
    'UPDATE_PROFILE',
    'UPDATE_PROFILE_SUCCESS',
    'UPDATE_PROFILE_VALIDATION_FAILURE'
  )
})(DumbProfileForm)
