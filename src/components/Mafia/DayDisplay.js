import React from 'react';
import PropTypes from 'prop-types';

DayDisplay.propTypes = {
  day: PropTypes.number,
  isNight: PropTypes.bool,
  turn: PropTypes.string
};

export default function DayDisplay({ day, isNight, turn }) {
  return (
    <div>
      {isNight && (
        <strong
          style={{
            fontSize: '3.2rem',
            textTransform: 'uppercase'
          }}
        >
          Night: {turn}
        </strong>
      )}
      <div>
        <strong
          style={{
            fontSize: '4.8rem',
            marginLeft: `${18 - day.toString().length ** 2}rem`
          }}
        >
          DAY {day}
        </strong>
        {/* 1: 17  2: 14 */}
      </div>
    </div>
  );
}
