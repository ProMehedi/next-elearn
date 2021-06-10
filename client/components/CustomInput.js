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
  size,
}) => {
  return (
    <Form.Group className={classes}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        size={size}
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
  onChange: PropTypes.func,
}

export default CustomInput
