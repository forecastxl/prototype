import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'

function CheckboxWrapper({ input, label }) {
  return <Checkbox label={label} checked={!!input.value} onCheck={input.onChange} />
}

CheckboxWrapper.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
}

export default CheckboxWrapper
