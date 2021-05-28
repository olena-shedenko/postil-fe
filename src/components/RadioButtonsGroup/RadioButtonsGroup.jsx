import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../RadioButton/RadioButton';

const RadioButtonsGroup = ({
  name,
  value,
  values,
  onChange,
  className,
  isColored,
}) => {
  return (
    <>
      {Object.entries(values).map(([val, text]) => (
        <RadioButton
          key={val}
          value={val}
          checked={value === val}
          className={className}
          name={name}
          text={text}
          onChange={onChange}
          isColored={isColored}
        />
      ))}
    </>
  );
};

RadioButtonsGroup.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  values: PropTypes.shape({}).isRequired,
  isColored: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

RadioButtonsGroup.defaultProps = {
  value: '',
  className: '',
  isColored: false,
};

export default RadioButtonsGroup;
