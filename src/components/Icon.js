import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.string
};

export default function Icon({ icon, size, ...props }) {
  return <FontAwesomeIcon icon={['fas', icon]} size={size} {...props} />;
}
