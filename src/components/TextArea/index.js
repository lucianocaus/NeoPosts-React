import React, { forwardRef } from 'react';
import propTypes from 'prop-types';

import './style.scss';

const TextArea = forwardRef(({
  placeholder = '',
  id,
  type = 'text',
  rows = 7,
  cols = 50,
  ...props
}, ref) => (
  <textarea
    ref={ref}
    className="retro-input"
    placeholder={placeholder}
    id={id}
    type={type}
    rows={rows}
    cols={cols}
    {...props}
  />
));

TextArea.propTypes = {
  placeholder: propTypes.string,
  id: propTypes.string.isRequired,
  type: propTypes.string,
  rows: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
  cols: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
};

export default TextArea;
