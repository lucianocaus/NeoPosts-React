import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Button = ({
  buttonClassName,
  text,
  disabled,
  onClick = () => {},
  type = 'button',
}) => (
  <button
    className={classnames('button', buttonClassName)}
    disabled={disabled}
    onClick={onClick}
    // eslint-disable-next-line react/button-has-type
    type={type}
  >
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  buttonClassName: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
