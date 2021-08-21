import React from "react";

const FormGroup = ({
  Id,
  Label,
  Type,
  onChange,
  Value,
  defaultValue,
  Checked,
  defaultChecked,
  className,
  Desc
}) => {
  return (
    <div className={className ? className : "form-group"}>
      <label htmlFor={Id} className="visually-hidden">
        {Label}
      </label>
      <input
        type={Type}
        className="form-control"
        id={Id}
        name={Id}
        onChange={onChange}
        value={Value}
        defaultValue={defaultValue}
        placeholder={"Please enter " + Label}
        checked={Checked}
        defaultChecked={defaultChecked}
        aria-describedby={Id + "Help"}
      />
      {Desc && (
        <small id={Id + "Help"} className="form-text text-muted">
          {Desc}
        </small>
      )}
    </div>
  );
};

export default FormGroup;
