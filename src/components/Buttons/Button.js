import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../constants/css';

Button.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  background: PropTypes.object,
  fontSize: PropTypes.string,
  isBold: PropTypes.bool
};

export default function Button({
  buttonText,
  onClick,
  background,
  fontSize,
  isBold
}) {
  !background && Color.limeGreen();
  !fontSize && '1.2rem';
  let styleBold = isBold ? 'bold' : 'normal';
  return (
    <div
      onClick={onClick}
      style={{
        background: background,
        fontSize: fontSize,
        fontWeight: styleBold
      }}
    >
      {buttonText}
    </div>
  );
}
