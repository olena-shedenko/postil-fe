import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RadioButton = ({
  value,
  checked,
  text,
  className,
  onChange,
  name,
  isColored,
}) => (
  <div className={`${className}-container`}>
    <input
      title={value}
      id={className}
      type="radio"
      value={value}
      name={name}
      checked={checked}
      className={className}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
    {!isColored ? (
      <div className={classNames('check', { checked })} />
    ) : (
      <div
        className={classNames(
          'color',
          { checked },
          {
            red: value === 'red',
            blue: value === 'blue',
            green: value === 'green',
            pink: value === 'pink',
            white: value === 'white',
            brown: value === 'brown',
            olive: value === 'olive',
            grey: value === 'grey',
            multi: value === 'ivory/natural/cream',
          }
        )}
      />
    )}

    <label htmlFor="className" className={`${className}-label`}>
      {text}
    </label>
  </div>
);

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isColored: PropTypes.bool,
};

RadioButton.defaultProps = {
  className: '',
  isColored: false,
};

export default RadioButton;
