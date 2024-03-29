import React, { forwardRef } from 'react';
import propTypes from 'prop-types';

import './style.scss';

const Input = forwardRef(({
  placeholder = '',
  id,
  type = 'text',
  ...props
}, ref) => (
  <input
    ref={ref}
    className="retro-input"
    placeholder={placeholder}
    id={id}
    type={type}
    {...props}
  />
));

Input.propTypes = {
  placeholder: propTypes.string,
  id: propTypes.string.isRequired,
  type: propTypes.string,
};

export default Input;
