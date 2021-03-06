/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

export const Facebook = ({ color, className }) => {
  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.13988 20V10.8771H10.3831L10.8687 7.3217H7.13988V5.05172C7.13988 4.02235 7.44258 3.32089 9.006 3.32089L11 3.32V0.14008C10.655 0.0968294 9.47145 0 8.09444 0C5.21955 0 3.25144 1.65687 3.25144 4.69971V7.3217H0V10.8771H3.25144V20H7.13988Z"
        fill={color}
      />
    </svg>
  );
};

Facebook.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
Facebook.defaultProps = {
  color: '#373F41',
  className: true,
};
