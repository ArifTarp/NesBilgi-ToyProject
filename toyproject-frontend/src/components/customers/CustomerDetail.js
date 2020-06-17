import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectBox from "../toolbox/SelectBox";

const CustomerDetail = ({ customer, onSave, onChange, errors, onClick }) => {
  return (
    <div>
      <form onSubmit={onSave}>
        <h2>{customer.id ? "Update" : "Add"}</h2>

        <TextInput
          name="customerId"
          label="Customer Id"
          value={customer.customerId}
          onChange={onChange}
          error={errors.customerId}
          placeHolder="Customer Id"
        />

        <TextInput
          name="first_Name"
          label="First Name"
          value={customer.first_Name}
          onChange={onChange}
          error={errors.first_Name}
          placeHolder="Customer First Name"
        />

        <TextInput
          name="last_Name"
          label="Last Name"
          value={customer.last_Name}
          onChange={onChange}
          error={errors.last_Name}
          placeHolder="Customer Last Name"
        />

        <TextInput
          name="eMail"
          label="E-Mail"
          value={customer.eMail}
          onChange={onChange}
          error={errors.eMail}
          placeHolder="E-Mail"
        />

        <SelectBox
          name="gender"
          label="Gender"
          value={customer.gender || "Male"}
          defaultOption="Seçiniz"
          onChange={onChange}
          error={errors.gender}
        />

        <TextInput
          name="phone"
          label="Phone"
          value={customer.phone}
          onChange={onChange}
          error={errors.phone}
          placeHolder="Phone"
        />

        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
      <hr />
      {customer.customerId ? (
        <button className="btn btn-danger" onClick={onClick}>
          Delete {customer.first_Name}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomerDetail;
