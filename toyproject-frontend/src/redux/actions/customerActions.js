import * as actionTypes from "./actionTypes";

export function getCustomers(customerId) {
  let url;
  if (customerId) {
    url = "https://localhost:44312/api/Customers/getcustomer/?customerId="+customerId;
  }
  else{
   url = "https://localhost:44312/api/Customers/getcustomers";
  }
  return function (dispatch) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(getCustomersSuccess(data)));
  };
}

export function getCustomersSuccess(customers) {
  return { type: actionTypes.GET_CUSTOMERS_SUCCESS, payload: customers };
}

export function saveCustomer(customer) {
  return function (dispatch) {
    return saveCustomerApi(customer)
      .then((savedCustomer) => {
        customer.id
          ? dispatch(updateCustomerSuccess(savedCustomer))
          : dispatch(createCustomerSuccess(savedCustomer));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveCustomerApi(customer) {
  let url = "";
  let addedCustomer = {
    customerId: Number(customer.customerId),
    first_Name: customer.first_Name,
    last_Name: customer.last_Name,
    eMail: customer.eMail,
    gender: customer.gender,
    phone: customer.phone,
  };
  if (customer.id) {
    addedCustomer.id = Number(customer.id);
    console.log("güncelle");
    url = "https://localhost:44312/api/Customers/updateCustomer";
  } else {
    url = "https://localhost:44312/api/Customers/AddCustomer";
  }
  return fetch(url, {
    method: customer.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(addedCustomer),
  })
    .then(handleResponse)
    .catch(handleError);
}

export async function handleResponse(response) {
  if (response.ok) {
    console.log("succ");
    return response;
  }

  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.log("Something Went Wrong");
  throw error;
}

export function createCustomerSuccess(customer) {
  return { type: actionTypes.CREATE_CUSTOMERS_SUCCESS, payload: customer };
}

export function updateCustomerSuccess(customer) {
  return { type: actionTypes.UPDATE_CUSTOMERS_SUCCESS, payload: customer };
}

export function deleteCustomer(customer) {
  return function (dispatch) {
    return deleteCustomerApi(customer)
      .then(dispatch(deleteCustomerSuccess(customer)))
      .catch((error) => {
        throw error;
      });
  };
}

export function deleteCustomerApi(customer) {
  return fetch(
    "https://localhost:44312/api/Customers/deleteCustomer/?customerId=" +
      (customer.id || ""),
    {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(customer),
    }
  )
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCustomerSuccess(customer) {
  return { type: actionTypes.DELETE_CUSTOMERS_SUCCESS, payload: customer };
}
