import React from 'react'
import { string, object } from 'prop-types'
import TextField from 'material-ui/TextField'

function TextFieldWrapper({ input, label, meta: { touched, error }, ...custom }) {
  return (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )
}

TextFieldWrapper.propTypes = {
  input: object.isRequired,
  label: string.isRequired,
  meta: object.isRequired
}

export default TextFieldWrapper
