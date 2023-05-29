import React from "react";
import "./InputField.css";
/**
 * InputField.jsx
 *
 * `InputField` is a component that displays a customizable input field.
 *
 * Props:
 *  - `type` (string): The type of the input (e.g. "text", "email", "password").
 *  - `value` (string): The current value of the input field.
 *  - `onChange` (function): Function to execute when the input's value changes.
 *  - `placeholder` (string): Placeholder text for the input field.
 *  - `name` (string): The name of the input field, useful for form handling.
 *  - `error` (string): Error message to display under the input field.
 *
 * @param {Object} props - Properties passed to component
 * @param {string} props.type - Input type
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler function
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.name - Input name
 * @param {string} props.error - Error message
 */
const InputField = ({ type, value, onChange, placeholder, name, error }) => {
  return (
    <div className="input__field">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={`input ${error && "input__error"}`}
      />
      {error && <p className="error__message">{error}</p>}
    </div>
  );
};

export default InputField;
