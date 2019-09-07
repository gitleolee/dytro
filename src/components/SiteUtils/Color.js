import React from 'react';
import PropTypes from 'prop-types';

Color.propTypes = {
    red: PropTypes.number,
    green: PropTypes.number,
    blue: PropTypes.number
};

export default function Color({ red, green, blue }) {
    return (
        <div>
            <div style={{
                width: '100px',
                height: '100px',
                background: `RGB(${red},${green},${blue})`
            }} />
        </div>
    );
}
