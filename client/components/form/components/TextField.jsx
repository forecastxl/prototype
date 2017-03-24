import React, { PropTypes } from 'react'
import MaterialTextField from 'material-ui/TextField'

function TextField({ input, label, meta: { touched, error }, ...custom }) {
  return (
    <MaterialTextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )
}

export default TextField
