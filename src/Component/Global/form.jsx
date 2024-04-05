import React, { useState } from 'react';
import { useField } from 'formik';

const FloatingLabelInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`form-group ${isFocused || field.value ? 'focused' : ''} ${meta.touched && meta.error ? 'has-error' : ''}`}>
      <input
        {...field}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label className={isFocused || field.value ? 'active' : ''} htmlFor={props.id || props.name}>
        {label}
      </label>
      {meta.touched && meta.error && <div className="error-message">{meta.error}</div>}
    </div>
  );
};

export default FloatingLabelInput;
