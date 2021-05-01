import { useField } from "formik";
import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({ type, label, name }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <div>
        <label className="input">
          <h5 className="input__title">{label}</h5>
          <input className="input__field" type={type} {...field} />
        </label>
      </div>
      {meta.error && meta.touched && (
        <span className="error">{meta.error}</span>
      )}
    </div>
  );
};

Input.prototypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
