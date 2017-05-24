import React from 'react'
import { object, string } from 'prop-types'
import Checkbox from 'material-ui/Checkbox'
import { Alert } from '../../alert'

function CheckboxWrapper({ input, label, meta: { touched, error } }) {
  return (
    <span>
      {touched && error && <Alert message={error} type={'error'} />}
      <Checkbox label={label} checked={!!input.value} onCheck={input.onChange} />
    </span>
  )
}

CheckboxWrapper.propTypes = {
  input: object.isRequired,
  label: string.isRequired,
  meta: object.isRequired
}

export default CheckboxWrapper
