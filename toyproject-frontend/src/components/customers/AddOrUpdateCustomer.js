import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCustomers } from "../../redux/actions/customerActions";
import { saveCustomer } from "../../redux/actions/customerActions";
import { deleteCustomer } from "../../redux/actions/customerActions";
import alertify from "alertifyjs";
import CustomerDetail from "./CustomerDetail";

function AddOrUpdateCustomer({
  customers,
  getCustomers,
  saveCustomer,
  deleteCustomer,
  history,
  ...props
}) {
  const [customer, setCustomer] = useState({ ...props.customer });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (customers.length === 0) {
      getCustomers();
    }

    setCustomer({ ...props.customer });
  }, [props.customer]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCustomer((previousCustomer) => ({
      ...previousCustomer,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));

    validate(name, value);
  }

  function validate(name, value) {
    if (name === "first_Name" && value === "") {
      setErrors((previousErros) => ({
        ...previousErros,
        first_Name: "Must Be First Name",
      }));
    } else if (name === "last_Name" && value === "") {
      setErrors((previousErros) => ({
        ...previousErros,
        last_Name: "Must Be Last Name",
      }));
    } else if (name === "eMail" && value === "") {
      setErrors((previousErros) => ({
        ...previousErros,
        eMail: "Must Be E-Mail",
      }));
    } else if (name === "phone" && value === "") {
      setErrors((previousErros) => ({
        ...previousErros,
        phone: "Must Be Phone",
      }));
    } else {
      setErrors((previousErros) => ({
        ...previousErros,
        [name]: "",
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveCustomer(customer).then(() => {
      history.push("/");
    });
    alertify.success(customer.first_Name + " Saved To Customers");
  }

  function handleDelete(event) {
    event.preventDefault();
    deleteCustomer(customer).then(() => {
      history.push("/");
    });
    alertify.error(customer.first_Name + " Deleted From Customers");
  }

  return (
    <CustomerDetail
      customer={customer}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
      onClick={handleDelete}
    />
  );
}

export function getCustomerById(customers, customerId) {
  let customer = customers.find((p) => p.customerId == customerId) || null;
  return customer;
}

function mapStateToProps(state, ownProps) {
  const customerId = ownProps.match.params.customerId;
  const customer =
    customerId && state.customerListReducer.length > 0
      ? getCustomerById(state.customerListReducer, customerId)
      : {};

  return {
    customer: customer,
    customers: state.customerListReducer
  };
}

const mapDispatchToProps = {
  getCustomers,
  saveCustomer,
  deleteCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateCustomer);