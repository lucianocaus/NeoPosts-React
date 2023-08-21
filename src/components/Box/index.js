import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Box = ({
  children,
  containerClassName = 'box',
}) => (
  <div className={`${containerClassName}`}>
    {children}
  </div>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  containerClassName: PropTypes.string,
};

export default Box;
