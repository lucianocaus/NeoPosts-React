import React, { forwardRef } from 'react';

import './style.scss';

const Input = forwardRef(({
  placeholder,
  id,
  type,
  ...props
}, ref) => (
  <input
    ref={ref}
    className="retro__input"
    placeholder={placeholder}
    id={id}
    type={type}
    {...props}
  />
));

export default Input;
