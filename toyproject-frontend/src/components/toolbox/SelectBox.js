import React from "react";

const SelectBox = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
  option,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="">{value}</option>
        <option>{value==="Female"?"Male":"Female"}</option>
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectBox;
