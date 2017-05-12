import React, { PropTypes } from 'react'
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
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
}

export default TextFieldWrapper
