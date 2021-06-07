import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

const CustomInput = ({
  children,
  type,
  label,
  placeholder,
  value,
  onChange,
  classes,
}) => {
  return (
    <Form.Group className={classes}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      >
        {children}
      </Form.Control>
    </Form.Group>
  )
}

CustomInput.defaultProps = {
  classes: 'mb-3',
  type: 'text',
}

CustomInput.propTypes = {
  classes: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.function,
}

export default CustomInput
