import React, { PropTypes } from 'react'
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
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
}

export default CheckboxWrapper
